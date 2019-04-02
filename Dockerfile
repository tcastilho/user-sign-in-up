FROM node:8

WORKDIR /user-sign-in-up

COPY package*.json ./

RUN npm install

COPY . .

USER node

EXPOSE 8080
CMD [ "npm", "start" ]