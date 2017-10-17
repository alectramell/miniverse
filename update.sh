#!/bin/bash

clear

git add *.md
git add *.sh
git add *.txt
git add *.json
git add *.html
git add *.desktop
git add *.zip
git add fonts
git add img
git add js
git commit -m "miniverse"
git push origin master

clear

echo "MINVERSE UPLOAD COMPLETE!" | pv -qL 10

sleep 0.5
