FROM node:16.10 AS BUILD_IMAGE

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --only=prod
RUN npm install express

# Build the app
RUN npm run build

FROM node:16.10

WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /usr/src/app/public/dist ./public/dist
COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules
COPY server.js server.js

# Expose the app port
EXPOSE "80:3000"

# Start the app
CMD node server.js