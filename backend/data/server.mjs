import { pipeline } from '@xenova/transformers';
import express from 'express'
import http from 'http'
import cors from 'cors'
import fs from 'fs/promises'

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));
app.use('/api/askme', cors());

const templateErrorMessage = "It seems like you asked me about something I don't have knowledge of. Could you please try rephrasing the question?"

app.get('/api/askme/:question', async (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let question = req.params.question;

    let context = '';
    let answer = {
        answer: '',
        score: 0
    }
    try {
        const files = await fs.readdir('./backend/data');
        const fileContents = await Promise.all(
            files.map((file) => fs.readFile(`./backend/data/${file}`, 'utf-8'))
        );
        context = fileContents.join('');
        let answerer = await pipeline('question-answering', 'Xenova/distilbert-base-cased-distilled-squad');
        answer = await answerer(question, context)
    } catch (err) {
        answer.answer = 'Sorry there was a problem extracting Context :('
        answer.score = 1
    }

    let words;
    if (answer.score > 0.2) {
        words = answer.answer.split(" ").filter(word => word.length > 0);
    }
    else {
        words = templateErrorMessage.split(" ").filter(word => word.length > 0);
    }

    let currentIndex = 0;
    const sendWord = () => {
        if (currentIndex < words.length) {
            res.write(`data: ${words[currentIndex]}\n\n`);
            currentIndex++;
            setTimeout(sendWord, 100);
        } else {
            res.end()
        }
    };
    sendWord();
});

const port = 5000;
server.listen(port, () => {
    console.log(`SSE server is running on port ${port}`);
});
