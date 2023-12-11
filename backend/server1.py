from flask import Flask, Response
from flask_cors import CORS 
from transformers import pipeline
import os
import time

app = Flask(__name__)
CORS(app)

@app.route('/api/askme/<question>')
def ask_me(question):
    def generate():

        model_name='deepset/roberta-base-squad2'
        template_error_message = "It seems like you asked me about something I don't have knowledge of. Could you please try rephrasing the question?"
        context = ''

        try:
            files = os.listdir('./data')
            file_contents = [open(f'./data/{file}', 'r').read() for file in files]
            context = ''.join(file_contents)
        except Exception as e:
            context = f"Sorry there was a problem extracting Context: {str(e)}"
        
        answerer = pipeline('question-answering', model=model_name, tokenizer=model_name)
        answer = answerer({'question': question, 'context': context})


        words = answer['answer'].split() if answer['score'] > 0.2 else template_error_message.split()

        for word in words:
            time.sleep(0.1)
            yield f"data: {word}\n\n"

    return Response(generate(), content_type='text/event-stream')

if __name__ == '__main__':
    port = 5000
    app.run(port=port, debug=True)
