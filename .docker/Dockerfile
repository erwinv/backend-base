FROM node:gallium as build
RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM node:gallium-alpine as base
RUN apk update
RUN apk add --no-cache ca-certificates
RUN update-ca-certificates

FROM base as dependencies
RUN mkdir /app
WORKDIR /app
RUN apk add --no-cache python3 make g++
COPY package.json package-lock.json ./
RUN npm install --production

FROM base as runtime

ARG commit_id
ENV NODE_ENV=production COMMIT_ID=${commit_id}
CMD npm run start

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --from=dependencies --chown=node /app/node_modules/ ./node_modules/
COPY --from=build --chown=node /app/build/ ./build/
COPY --chown=node ./ ./
