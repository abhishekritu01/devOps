FROM node:slim

# Create app directory
WORKDIR /app
COPY  . /app

# Install app dependencies
RUN npm install
EXPOSE  3000
CMD node index.js