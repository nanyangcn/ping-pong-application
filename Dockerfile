FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .
COPY tsconfig.json .
COPY index.ts db.ts types.ts utils.ts ./

RUN yarn && \
    yarn tsc

CMD yarn start