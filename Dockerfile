FROM node:18 as base

WORKDIR /home/node/app

COPY package*.json ./

COPY . .

RUN npm i
