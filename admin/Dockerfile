FROM node:17.1.0

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# have latest npm (stable version)
RUN npm i npm@latest -g

WORKDIR /home/node/app

RUN apt-get update

RUN apt-get install -y python

RUN apt-get install -y yarn

RUN npm install -g gatsby-cli

#COPY --chown=node:node package.json yarn.lock* ./

RUN yarn install --no-optional --verbose && yarn cache clean --force

RUN npm rebuild sharp --verbose

ENV PATH=/home/node/app/node_modules/.bin:$PATH

#ENTRYPOINT ["yarn", "start"]