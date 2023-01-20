# Sample App - Docker k8
Playground for Docker & Kubernetes which will contain multiple projects.

## Getting started

For app1 `.env` file is required before running the project - `mv env .env`.
By default the development will be pointing to the local machine and docker network -`favorites-net`- will be created on post install for the containers to connect.
A docker hub account and personal access token is required
For frontend, backend contaiers, an `env/.backend.env` file is required, mongodb host will default to localhost (k8 setup), and current set will use mongodb value for local network development (please see `docker-compose.yml`).

## Deps

- Nodejs
- Docker
- Mongodb ([installation](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#installing-mongodb-6.0-edition-edition)) for local setup. `brew services start mongodb-community`

## Projects repo

Containerised version of FE, BE services on mongoDB are available and running on `goals-network` that will need to be created.