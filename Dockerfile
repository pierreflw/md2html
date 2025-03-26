FROM httpd:2.4-alpine

COPY ./app /usr/local/apache2/htdocs

EXPOSE 80