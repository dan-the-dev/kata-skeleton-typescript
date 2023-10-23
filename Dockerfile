FROM node:18 as base

WORKDIR /home/node/app

COPY . .

RUN npm i
