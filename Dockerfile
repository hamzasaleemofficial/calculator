#build react app
FROM node:22

WORKDIR /calculatorApp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
