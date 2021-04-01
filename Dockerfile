FROM node:lts-alpine

WORKDIR /home/node

COPY ./package.json .

RUN yarn install --silent

COPY . .
CMD ["npm", "run", "start-proxy"]
