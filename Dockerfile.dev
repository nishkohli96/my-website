# Phase 1 - Get Node img, run npm i   
FROM node:14.15.4-alpine3.11
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build 

# Phase2 - Host build files on nginx
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html