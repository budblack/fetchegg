FROM budblack/alinode-scool:0.3
MAINTAINER budblack@qq.com
USER root
# 拷贝代码
ENV EGG_SERVER_ENV prod
ENV PORT 80
EXPOSE 80
WORKDIR /app
CMD source ~/.bashrc\
 && nohup agentx /app/agentx.json&\
 source ~/.bashrc\
 && nohup npm start
ENV ENABLE_NODE_LOG YES
ENV NODE_LOG_DIR /tmp/
ADD . /app
RUN source ~/.bashrc \
 && cd /app \
 && npm install --production