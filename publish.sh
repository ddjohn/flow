#!/bin/bash

~/.meteor/meteor build ../nextgen --directory --server-only
cd ../nextgen
git add --all && git commit -m "First Launch" && git push

