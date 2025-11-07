#!/bin/bash
cd /home/ec2-user/myapp

# Start or restart PM2 static server
pm2 serve dist 3000 --name myapp --spa --watch
pm2 save
