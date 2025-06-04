# Use official Node.js runtime as base image
FROM node:14

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose port your app runs onmm
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
