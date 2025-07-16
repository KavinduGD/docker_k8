# FROM node:22-alpine
# WORKDIR /app
# COPY package*.json .
# RUN npm i 
# COPY src src
# ENV PORT=3000
# CMD ["npm","start"]

FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm i

FROM gcr.io/distroless/nodejs22
WORKDIR /app
COPY --from=build /app/node_modules node_modules
COPY src src
ENV PORT=3000

CMD ["src/index.js"]
