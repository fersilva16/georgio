FROM node:16-alpine

RUN npm install --global pnpm

WORKDIR /app

COPY . .

RUN pnpm install --prod --ignore-scripts
RUN pnpm install --no-lockfile @swc/cli @swc/core

RUN pnpm build

EXPOSE 8080

CMD pnpm start
