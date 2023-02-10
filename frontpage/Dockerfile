FROM node:16

WORKDIR /app
COPY package*.json ./
RUN npm i

EXPOSE 8081

CMD ["npm", "run", "serve"]