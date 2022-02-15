FROM node:16.14.0 

WORKDIR /usr/local/medaid

COPY ./package*.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]