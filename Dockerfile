# Use Node.js official image as base
FROM node:18-alpine

# Set working directory
WORKDIR /

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Expose the port the app runs on
EXPOSE 10000

# Start the application
CMD ["npm", "start"]
