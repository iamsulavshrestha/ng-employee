FROM node:lts-alpine

WORKDIR /app

#RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
#RUN apt-get install -y nodejs
#RUN npm install -g yarn
#RUN yarn global add create-react-app heroku commitizen firebase-tools express express-generator 

COPY . .
RUN yarn install

#CMD ["yarn", "start"]