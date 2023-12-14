# FROM python:3.9.12-slim
FROM python:3.11.5-bookworm
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python", "server.py"]
