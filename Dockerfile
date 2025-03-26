FROM httpd:2.4-alpine

COPY ./app /user/local/apache2/htdocs

EXPOSE 80