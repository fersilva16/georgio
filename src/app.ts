import Router from '@koa/router';
import Koa from 'koa';

import { status } from './status/status';

const app = new Koa();

const router = new Router();

router.get('/status', status);

// @todo: add logger filtering /status
app.use(router.routes());

export { app };
