FROM node:latest
MAINTAINER Berryhill

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app
RUN npm install

RUN rm -rf dist
RUN mkdir dist
RUN npm rebuild node-sass
RUN rm -rf node_modules
RUN npm install

# Build the app
RUN npm run build

# Expose the app port
EXPOSE 3000

# Start the app
CMD npm run start
