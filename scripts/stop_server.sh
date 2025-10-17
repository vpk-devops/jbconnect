#!/bin/bash

# Kill any app running on port 3000 (or adjust the port)
PID=$(lsof -t -i:3000)
if [ ! -z "$PID" ]; then
  echo "Stopping Node.js app (PID: $PID)..."
  kill -9 $PID
else
  echo "No app running on port 3000."
fi
