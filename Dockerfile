FROM node:16.14.2-buster
EXPOSE 8085
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install 
COPY . .
CMD ["npm","run","start"]

