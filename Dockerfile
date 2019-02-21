FROM node:10.15-alpine

RUN mkdir /websitone-fe
WORKDIR /websitone-fe
COPY . .
RUN npm rebuild node-sass
RUN yarn 

EXPOSE 8080

CMD ["yarn", "start"]