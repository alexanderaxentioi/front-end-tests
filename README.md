# ATP Shop 2.0

The new ATP Shop.

## Prerequisites

Before installing you need the following things:
- [Docker](https://www.docker.com/products/docker-desktop/)
- [NVM](https://github.com/nvm-sh/nvm)
- Install python 2 [pyenv](https://github.com/pyenv/pyenv#homebrew-in-macos)
- Install latest node version 17: nvm install 17
- Gatsby: npm install -g gatsby-cli
- Medusa: npm install -g @medusajs/medusa-cli

## Installation

How to install the application:

```bash
  git clone https://github.com/ATPAutoteile/shop20.git
  cd shop20
  make
  //OR to install and seed
  make install-seed
  //OR to install separatly
  make install-backend
  make install-admin
  make install-frontend
  
  //To seed separatly - backend has to be running first
  make seed
  
  //Then run all applications:
  make run
```
## Usage

To run the applications separately:

```bash
  make run-backend //for medusa
  make run-admin //for admin
  make run-frontend //for frontend
```

### URLs

To access Medusa API: http://localhost:9000  
To access Admin: http://localhost:7001

## Seeding
To seed the application run the following command (the application containers need to run):
```bash
make seed
```

If there is an error because the container is not found, then you either need to start it or the name used is wrong, 
in that case try (replace {container_name} with the actual name of the container):

```bash
docker exec {container_name} sh -c "medusa seed -f data/seed.json"
```

After seeding the credentials for the admin are:
```json
{
  "email": "admin@medusa-test.com",
  "password": "supersecret"
}
```

## Troubleshooting

