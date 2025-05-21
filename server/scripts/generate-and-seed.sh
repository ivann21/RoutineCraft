#!/bin/bash

echo "Generando cliente Prisma..."
npx prisma generate

echo "Sembrando datos de retos..."
node scripts/seedChallenges.js
