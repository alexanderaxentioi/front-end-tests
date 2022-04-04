FROM node:16 as build-stage

WORKDIR /app

RUN npx next telemetry disable

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --ignore-scripts --ignore-optional

COPY . .

RUN yarn dist

FROM caddy:2.4.6-alpine

WORKDIR /app

COPY ./.container/Caddyfile /etc/caddy/Caddyfile

COPY --from=build-stage /app/out /app
