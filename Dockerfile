FROM ubuntu
WORKDIR /app 
RUN mkdir -p /app/aula/
COPY .gitignore /app/aula/.gitignore
