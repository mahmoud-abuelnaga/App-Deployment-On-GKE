version = v2.0.0

.PHONY: push
push: docker-build
	docker push abuelnaga0/color-api:$(version)

.PHONY: docker-build
docker-build: dependencies
	docker build --tag abuelnaga0/color-api:$(version) --file Dockerfile .

.PHONY: dependencies
dependencies:
	npm install