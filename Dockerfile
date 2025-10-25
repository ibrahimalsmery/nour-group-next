# =========================
# 1️⃣ Base image
# =========================
FROM node:lts-alpine AS base

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies (both dev + prod)
RUN npm install

# Copy source files
COPY . .

# Disable telemetry
RUN npx next telemetry disable

# =========================
# 2️⃣ Development stage
# =========================
FROM base AS development

ENV NODE_ENV=development
EXPOSE 3000

# Run Next.js in dev mode with hot reload
CMD ["npm", "run", "dev"]

# =========================
# 3️⃣ Build stage (for production)
# =========================
FROM base AS build

ENV NODE_ENV=production

# Create optimized build
RUN npm run build

# =========================
# 4️⃣ Production stage
# =========================
FROM node:lts-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Copy only necessary files from build stage
COPY --from=build /app/package*.json ./
RUN npm install --omit=dev

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.ts ./next.config.ts

EXPOSE 3000

# Start production server
CMD ["npm", "run", "start"]
