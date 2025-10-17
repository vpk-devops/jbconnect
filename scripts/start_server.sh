#!/bin/bash

cd /home/ec2-user/my-node-app

# Start the app in background (no PM2)
nohup node app.js > app.log 2>&1 &

echo "Node.js app started"
