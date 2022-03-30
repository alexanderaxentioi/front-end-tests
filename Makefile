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

stop-backend:
	@echo "Stop the Backend."
	@cd backend; \
	docker-compose stop

seed:
	@echo "Seeding the backend"
	@docker exec backend_backend_1 sh -c "medusa seed -f data/seed.json"

install-backend-ci:
	@echo "Installing the backend (CI)"
	@cd admin; \
    npm install