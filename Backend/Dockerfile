# Use Node 22
FROM node:22-alpine

# 1. Create and set the working directory (CRITICAL)
WORKDIR /app

# 2. Copy package files from your Windows folder to the /app folder in Docker
COPY package*.json ./

# 3. Install dependencies
RUN npm install --legacy-peer-deps

# 4. Copy the rest of your backend code
COPY . .

# 5. Expose port and start
EXPOSE 5000
CMD ["node", "server.js"]