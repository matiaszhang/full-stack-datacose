FROM tiangolo/uvicorn-gunicorn:python3.10

ENV PYTHONUNBUFFERED True

RUN apt update && apt install -y make

WORKDIR /app

ADD requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

ENV PORT 8000

CMD exec uvicorn main:app --host 0.0.0.0 --port $PORT
