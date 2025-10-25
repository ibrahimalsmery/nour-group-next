FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=optional \
    && npm install typescript

COPY . .

RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]

# build image 
# docker build -t  nourgroup .
# run container
# docker run -p 3000:3000 nourgroup
