FROM node:18

RUN npm install --global pnpm

WORKDIR /app

COPY . .

RUN pnpm install --prod --ignore-scripts
RUN pnpm build

CMD pnpm start
