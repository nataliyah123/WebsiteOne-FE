FROM node:10.15-alpine

RUN mkdir /websiteone-fe
WORKDIR /websiteone-fe
COPY . .
RUN yarn 

ENTRYPOINT [ "./entrypoint.sh" ]