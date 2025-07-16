FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm i
COPY tsconfig.json .
COPY src src
RUN npm run build


FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json .
RUN npm i --only=production



FROM gcr.io/distroless/nodejs22
WORKDIR /app
COPY --from=deps /app/node_modules node_modules
COPY --from=build /app/dist dist

ENV PORT=3000

CMD ["dist/index.js"]