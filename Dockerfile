FROM nginx

COPY ./dist /usr/share/nginx/html
COPY ./.docker/nginx /etc/nginx/conf.d
