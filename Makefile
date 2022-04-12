install: install-backend install-admin install-frontend

install-seed: install-backend seed install-admin install-frontend

install-backend:
	@echo "Installing the backend."
	@cd backend; \
	docker-compose up --build -d

install-admin:
	@echo "Installing the Admin."
	@cd admin; \
	yarn install

install-frontend:
	@echo "Installing the frontend"
	@cd frontend; \
	yarn install --ignore-optional

run: run-backend run-admin run-frontend

run-backend:
	@echo "Running the Docker containers detached"
	@cd backend; \
    docker-compose up -d

run-admin:
	@echo "Running the Admin"
	@cd admin; \
	yarn start

run-frontend:
	@echo "Running the Frontend"
	@cd frontend; \
	yarn dev

stop-backend:
	@echo "Stop the Backend."
	@cd backend; \
	docker-compose stop

seed:
	@echo "Seeding the backend"
	@docker exec backend_backend_1 sh -c "medusa seed -f data/seed.json"

migrate:
	@echo "Running migrations"
	@cd backend; \
	medusa migrations

ssh-backend:
	@cd backend; \
	docker exec -ti medusa-server-default bash

lint-backend:
	@echo "Running backend linter"
	@cd backend; \
	npx eslint src

lint-admin:
	@echo "Running admin linter"
	@cd admin; \
    npx eslint src

lint-frontend:
	@echo "Running frontend linter"
	@cd frontend; \
	yarn lint

test-backend:
	@echo "Running backend tests"
	@cd backend; \
	npm run test

test-admin:
	@echo "Running admin tests"
	@cd admin; \
	yarn test

test-frontend:
	@echo "Running frontend tests"
	@cd frontend; \
	yarn test:ci