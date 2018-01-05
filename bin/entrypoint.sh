#!/bin/sh

rm -rf ./static/*
cp -R ./public/* ./static/

until nc -z $POSTGRES_HOST 5432; do echo Waiting for postgresql; sleep 1; done

bundle exec rake db:migrate
bundle exec puma -C config/puma.rb
