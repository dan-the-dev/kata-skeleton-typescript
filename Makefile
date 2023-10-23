.PHONY: install test

install:
	docker-compose run main npm install

test:
	docker-compose run main npm test
