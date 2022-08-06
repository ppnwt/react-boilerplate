#!/bin/sh

git pull --rebase
git add .
git commit -m "tag deploy v0.1.0"
git tag -a v0.1.0 -m "update tag deploy 0.1.0"
git push origin main
