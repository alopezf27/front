# Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json vite.config.js ./
COPY .env ./
RUN npm ci
COPY index.html ./index.html
COPY src ./src
RUN npm run build

# Run (nginx)
FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]