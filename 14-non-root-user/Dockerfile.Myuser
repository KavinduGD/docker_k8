FROM node:22-alpine

WORKDIR /app

RUN addgroup -S nodegroup && \
    adduser -S nodeuser -G nodegroup

RUN chown -R nodeuser:nodegroup /app

USER nodeuser

COPY --chown=nodeuser:nodegroup package*.json .

RUN npm install

COPY --chown=nodeuser:nodegroup . .

EXPOSE 3000

ENTRYPOINT ["node", "app.js"]

