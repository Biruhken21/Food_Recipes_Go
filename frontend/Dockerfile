FROM node:20-alpine

WORKDIR /app

# Copy package.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build step (optional if you serve from Docker)
# RUN npm run build

CMD ["npm", "run", "dev"]
