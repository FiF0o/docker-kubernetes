run:
	docker-compose up -d

all:
	echo "build images and run containers"
	docker-compose up -d --build

build:
	echo "build images"
	docker-compose build

clean:
	docker-compose down -v