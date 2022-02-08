FROM node

WORKDIR /usr/local/medaid

COPY ./package*.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]