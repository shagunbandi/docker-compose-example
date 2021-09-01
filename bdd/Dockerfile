FROM node:12
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ENTRYPOINT ["npx", "wdio", "wdio.conf.js"]