# Zatec Front End App

This app is created in fulfilment of a technical assesssment from Zatec. The aim is to create a SPA that consume some endpoints from [Star War API](https://swapi.dev) and [Chuck Norris API](https://api.chucknorris.io/)

## Demo Link

Access production app deployed on [https://zatec-frontend.herokuapp.com/](https://zatec-frontend.herokuapp.com/) 

## Set Up

Check out to **develop** branch. In the project directory, you can run:

> `npm start`

Runs the app in the development mode.  

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

OR 

With docker installed, run the below commands

> `docker build -t zatec-frontend:dev -f ./.docker/dev/Dockerfile .`
>
> `docker run  -p 8080:80 -e PORT=80 zatec-frontend:dev`

Then access app locally on [http://localhost:8080](http://localhost:8080)

## Technologies

*  **Front End:**  React, Docker, Travis CI (CI/CD), NGINX
* **Back End:** Java, Spring Boot, Swagger,Docker, Travis CI

## Lincense

MIT lincense @ [Ucheka Chike](https://www.linkedin.com/in/ucheka-chike/)
