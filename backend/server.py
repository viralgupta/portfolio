from dotenv import load_dotenv
from flask import Flask, Response
from flask_cors import CORS 
import time
from langchain.embeddings import GooglePalmEmbeddings
from langchain.llms.google_palm import GooglePalm
from langchain.vectorstores.chroma import Chroma
from langchain.chains import VectorDBQA
import os

def read_files_in_folder():
    data = []
    file_count=0

    if not os.path.exists("./backend/data"):
        print(f"The folder ./backend/data does not exist.")
        return data, file_count

    for filename in os.listdir("./backend/data"):
        file_path = os.path.join("./backend/data/", filename)

        if filename == "file_count.txt":
            with open(file_path, 'r', encoding='utf-8') as file:
                file_content = file.read()
                file_count = int(file_content)
            continue

        if os.path.isfile(file_path) and filename.endswith(".txt"):
            with open(file_path, 'r', encoding='utf-8') as file:
                file_content = file.read()
                data.append(file_content)

    return data, file_count

def create_vector_db(text_chunks):
    embeddings = GooglePalmEmbeddings(google_api_key=os.environ['API_KEY'])
    vector_store = Chroma.from_texts(texts=text_chunks, embedding=embeddings, persist_directory="./backend/vector_store")
    vector_store.persist()
    return vector_store

def get_vector_db():
    embeddings = GooglePalmEmbeddings(google_api_key=os.environ['API_KEY'])
    vector_store = Chroma(persist_directory="./backend/vector_store",embedding_function=embeddings)
    print(vector_store.get())
    return vector_store

def main():
    load_dotenv()
    data, sources, count = read_files_in_folder()
    if count < len(sources):
        store = create_vector_db(data, sources)
        with open("./backend/data/file_count.txt", 'w', encoding='utf-8') as file:
            file.write(str(len(sources)))
    else:
        store = get_vector_db()
    print(store.get())
    QA = VectorDBQA.from_chain_type(llm=GooglePalm(google_api_key=os.environ['API_KEY']), chain_type="stuff", vectorstore=store)
    answer = QA({'query': "What all did you use to make digi booking?"}, return_only_outputs=True)
    print(answer)

if __name__ == "__main__":
    main()