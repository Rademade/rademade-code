#!/bin/sh

rm -rf ./static/*
cp -R ./public/* ./static/

bundle exec rake db:migrate
bundle exec puma -C config/puma.rb