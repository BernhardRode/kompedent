#!/bin/sh
rm -Rf www
harp compile
surge www jaded-balloon.surge.sh
