FROM node:carbon-alpine

WORKDIR /app

ADD . /app

RUN npm install

RUN npm install -g @quasar/cli

EXPOSE 8080

ENV NODE_ENV=development

RUN mv ./post-up.sh /usr/bin/setup

RUN ["chmod", "+x", "/usr/bin/setup"]

RUN mv ./.env.example /app/.env

CMD setup
