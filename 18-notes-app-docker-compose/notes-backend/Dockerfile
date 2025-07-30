FROM node:22-alpine AS development 

WORKDIR /app
COPY package*.json .
RUN npm i
COPY src src
CMD ["npm","run","dev"]


FROM node:22-alpine AS prod_dependencies

WORKDIR /app
COPY package*.jon .
RUN npm i --only=production

FROM gcr.io/distroless/nodejs22 AS production

WORKDIR /app
COPY --from=development /app/node_modules /node_modules
COPY src src
CMD ["src/server.js"]
