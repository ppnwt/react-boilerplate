#!/bin/sh

git add .
msg="update readme site"

if [ $# -eq 1 ]
  then msg="$1"
fi

git commit -m "$msg"
git pull --rebase
git push origin main
# git pull --rebase
# git commit -m "tag deploy v0.1.0"
# git tag -a v0.1.0 -m "update tag deploy 0.1.0"
# git push origin v0.1.0
