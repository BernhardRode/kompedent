#!/bin/sh
rm -Rf www
./node_modules/.bin/bower install
./node_modules/.bin/harp compile
./node_modules/.bin/surge www jaded-balloon.surge.sh
