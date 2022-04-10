#!/bin/bash
docker login --username $HEROKU_USERNAME --password $HEROKU_API_KEY registry.heroku.com
docker build -t zatec-frontend:prod -f ./.docker/prod/Dockerfile .
docker tag zatec-frontend:prod registry.heroku.com/$HEROKU_APP_NAME/web
docker push registry.heroku.com/$HEROKU_APP_NAME/web
heroku container:release -a $HEROKU_APP_NAME web