FROM node:lts-alpine3.22

RUN apk add --no-cache libc6-compat
RUN npm i -g npm

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production

WORKDIR /home/nextjs/app

COPY package.json .
COPY package-lock.json .

RUN npm install --omit=optional
RUN npx browserslist@latest --update-db
RUN npx next telemetry disable

# need to install linux specific swc builds
RUN npm install -D @swc/cli @swc/core

# install serve to run the static build
RUN npm install -g serve

COPY . .

RUN npm run build 

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs


# CMD [ "npm", "start" ]
CMD [ "serve", "out", "-l", "3000" ]