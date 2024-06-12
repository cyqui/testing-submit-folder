FROM node:16.13-alpine as builder

WORKDIR /app
COPY src ./src
COPY *.json ./
RUN rm -rf node_modules/ && npm install && npm run build \
    && rm -rf node_modules/ && \
    npm install --production

FROM node:16.13-alpine

WORKDIR /app

COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules


CMD [ "node", "dist/main.js" ]