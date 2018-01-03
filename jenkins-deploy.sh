#!/usr/bin/env bash
set -eux

gem install bundler

bundle install

yarn install

#build frontend
bundle exec rake assets:precompile

#build and push docker image
sudo docker login --username=$REGISTRY_USER --password=$REGISTRY_PASS $REGISTRY

sudo docker build -t $REGISTRY/$PROJECT_NAME:latest .

sudo docker push $REGISTRY/$PROJECT_NAME:latest

#update service on docker manager
ssh  $DOCKER_USER@$DOCKER_HOST "docker login --username=$REGISTRY_USER --password=$REGISTRY_PASS $REGISTRY && docker service update --image $REGISTRY/$PROJECT_NAME:latest rademade-code_app &&  docker logout $REGISTRY && exit"

break

