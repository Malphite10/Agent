#!/bin/bash
set -e

echo "Starting setup..."

# 1. Install dependencies
echo "Installing dependencies..."
npm install

# 2. Run build
echo "Running build..."
npm run build

echo "Setup complete. You can now run the agent with 'npm start' or use 'npm run dev' for development."
