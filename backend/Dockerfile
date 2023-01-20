FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV MONGODB_HOST=localhost

EXPOSE 80

CMD [ "npm", "start" ]