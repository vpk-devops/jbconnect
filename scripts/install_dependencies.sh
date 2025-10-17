#!/bin/bash
cd /home/ec2-user/my-node-app

# Optional: Clean old install
rm -rf node_modules

# Install Node.js dependencies
npm install
