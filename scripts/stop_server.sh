#!/bin/bash

# Stop old PM2 process if exists
pm2 stop myapp || true
pm2 delete myapp || true
