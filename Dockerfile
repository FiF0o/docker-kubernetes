FROM node

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

# env layers
ARG DEFAULT_PORT=8080
# Default PORT
ENV PORT $DEFAULT_PORT

EXPOSE $PORT

CMD ["npm", "start"]