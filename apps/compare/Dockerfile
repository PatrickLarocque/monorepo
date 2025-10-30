FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx nx build compare --configuration=production

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist/apps/compare/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]