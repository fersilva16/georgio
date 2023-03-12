import type { Context } from 'koa';

export const status = async (ctx: Context) => {
  ctx.body = 'Ok';
  ctx.status = 200;
};
