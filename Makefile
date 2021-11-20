docker-build:
	docker build -t backend-base -f .docker/Dockerfile \
		--build-arg commit_id=$(shell git rev-parse HEAD) \
		.

docker-compose-up:
	docker-compose -f .docker/docker-compose.yml up
