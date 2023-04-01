import util from 'node:util';

export const debugConsole = (object: unknown) =>
  // eslint-disable-next-line no-console
  console.log(util.inspect(object, false, Infinity, true));
