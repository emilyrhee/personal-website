#!/bin/sh

export HOST="64.176.199.73"
export PORT=80
export ORIGIN="http://emilyrhee.me/"

cd /home/emilyrhee/personal-website
git pull
npm install
npm run build
node build