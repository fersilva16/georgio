FROM node:19

RUN npm install --global pnpm

WORKDIR /app

COPY . .

RUN pnpm install --prod --ignore-scripts
RUN pnpm build

EXPOSE 8080

CMD pnpm start
