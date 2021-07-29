# Citybrain nginx Dockerfile
# Version 1.0
# Base images 基础镜像
FROM reg.watone.local/library/nginx:1.21.0-alpine
#LABEL 维护者信息
LABEL caosx caosx@watone.com.cn
#COPY
COPY ./dist/ /usr/share/nginx/html/
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY ./conf/default.conf /etc/nginx/conf.d/default.conf
#RUN 赋予权限
RUN chown -R nginx. /usr/share/nginx
#EXPOSE 映射端口
EXPOSE 8000
#ENTRYPOINT 运行以下命令
ENTRYPOINT ["nginx", "-g", "daemon off;"]