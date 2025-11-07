#!/bin/bash
cd /home/ec2-user/myapp

# Install dependencies cleanly
npm ci

# Install PM2 globally if not installed
if ! command -v pm2 &> /dev/null
then
  sudo npm install -g pm2
fi
