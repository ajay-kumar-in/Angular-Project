#!/bin/bash
set -e

# Stop Angular application or related processes
# Example: Stop a Node.js server running Angular application
echo "Stopping Angular application server..."

# Replace this with the command to stop your Angular application server
# Example: If using Node.js with npm script to start/stop
# pm2 stop <app_name>  # If you use PM2 to manage Node.js applications
pm2 stop ajaytest  # If you use PM2 to manage Node.js applications

# systemctl stop <service_name>  # If you use systemd to manage services

# Example: If serving Angular statically with a simple HTTP server
# You might not need to explicitly stop a server in this case

echo "Angular application server stopped successfully."




cd /var/www/html/angular-app
# Example: Install npm dependencies
npm install
