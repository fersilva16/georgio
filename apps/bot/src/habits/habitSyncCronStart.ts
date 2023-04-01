import { schedule } from 'node-cron';

import { habitSyncCron } from './habitSyncCron';

export const habitSyncCronStart = () => {
  schedule('0 6 * * *', habitSyncCron);

  // eslint-disable-next-line no-console
  console.log('Habit sync cron started!');
};
