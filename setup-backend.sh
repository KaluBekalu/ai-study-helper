#!/bin/bash

# Define project folder structure
PROJECT_NAME="backend"
SRC="$PROJECT_NAME/src"
API="$SRC/api"
CONFIG="$SRC/config"
SERVICES="$SRC/services"
PRISMA="$SRC/prisma"
TYPES="$SRC/types"
UTILS="$SRC/utils"
DIST="$PROJECT_NAME/dist"

# Create directories
echo "Creating project directories..."
mkdir -p "$PROJECT_NAME"
mkdir -p "$SRC"
mkdir -p "$API/controllers" "$API/routes"
mkdir -p "$CONFIG"
mkdir -p "$SERVICES"
mkdir -p "$PRISMA"
mkdir -p "$TYPES"
mkdir -p "$UTILS"
mkdir -p "$DIST"

# Create base files
echo "Creating base files..."
touch "$PROJECT_NAME/.env"
touch "$PROJECT_NAME/.gitignore"
touch "$PROJECT_NAME/package.json"
touch "$PROJECT_NAME/tsconfig.json"
touch "$PROJECT_NAME/README.md"
touch "$SRC/app.ts"
touch "$SRC/server.ts"
touch "$CONFIG/db.ts"
touch "$PRISMA/schema.prisma"

# API files
touch "$API/index.ts"
touch "$API/controllers/questionController.ts"
touch "$API/routes/questionRoutes.ts"

# Service files
touch "$SERVICES/aiService.ts"

# Utility files
touch "$UTILS/logger.ts"
touch "$UTILS/errorHandler.ts"

# Example type definitions
touch "$TYPES/question.d.ts"

# Write .gitignore
echo "node_modules/
dist/
.env" > "$PROJECT_NAME/.gitignore"

# Write tsconfig.json
echo "{
  \"compilerOptions\": {
    \"target\": \"ES2020\",
    \"module\": \"commonjs\",
    \"strict\": true,
    \"esModuleInterop\": true,
    \"outDir\": \"./dist\",
    \"rootDir\": \"./src\"
  },
  \"include\": [\"src/**/*\"],
  \"exclude\": [\"node_modules\"]
}" > "$PROJECT_NAME/tsconfig.json"

# Write schema.prisma
echo "datasource db {
  provider = \"sqlite\"
  url      = \"file:./dev.db\"
}

generator client {
  provider = \"prisma-client-js\"
}

model User {
  id       Int      @id @default(autoincrement())
  name     String
  progress Json
}" > "$PRISMA/schema.prisma"

echo "Folder structure and base files created successfully!"
echo "Navigate to the project directory with: cd $PROJECT_NAME"
