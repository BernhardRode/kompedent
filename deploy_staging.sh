#!/bin/sh
rm -Rf www
rm -Rf node_modules
harp compile
surge www jaded-balloon.surge.sh
