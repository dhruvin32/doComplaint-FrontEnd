FROM nginx:1.17.1-alpine
COPY ./dist/complaint /usr/share/nginx/html