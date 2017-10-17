#!/bin/bash

clear

rm miniverse.zip

clear

zip -r miniverse.zip *.html *.md *.json *.txt js img fonts

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

echo "MINIVERSE UPLOAD COMPLETE!" | pv -qL 10

sleep 0.5
