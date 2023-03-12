import Router from '@koa/router';
import Koa from 'koa';
import koaLogger from 'koa-logger';

import { status } from './status/status';

const app = new Koa();

const router = new Router();

router.get('/status', status);

app.use(koaLogger());
app.use(router.routes());

export { app };
