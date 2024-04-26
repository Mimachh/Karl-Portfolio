FROM node:lts AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
COPY src dist/src
FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80

# docker build -t monportfolio .
# docker run -p 4321:80 monportfolio