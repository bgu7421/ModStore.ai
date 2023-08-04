FROM node:12.16

WORKDIR /app

ENV PATH /app/node_modeule/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN npm install --silent

COPY . ./

CMD ["npm", "start"]
