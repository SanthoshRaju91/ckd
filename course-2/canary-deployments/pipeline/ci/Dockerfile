FROM node:16-alpine

ARG VERSION

ENV VERSION=${VERSION}

RUN mkdir -p /app

WORKDIR /app

COPY ./app .

RUN npm install

CMD [ "node", "index.js" ]