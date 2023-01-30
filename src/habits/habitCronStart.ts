import { schedule } from 'node-cron';

import { habitSync } from './habitSync';

export const habitCronStart = () => {
  schedule('0 6 * * *', habitSync);

  // eslint-disable-next-line no-console
  console.log('Habit sync cron started!');
};
