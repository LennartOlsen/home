FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./ /var/www/public