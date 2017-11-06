FROM node
MAINTAINER budblack@qq.com
ENV EGG_SERVER_ENV prod
ENV PORT 80
EXPOSE 80

RUN echo "Asia/Shanghai" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

CMD npm start

ADD . /app
WORKDIR /app
RUN npm install --production