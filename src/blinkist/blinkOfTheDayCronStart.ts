import { schedule } from 'node-cron';

import { blinkOfTheDayCron } from './blinkOfTheDayCron';

export const blinkOfTheDayCronStart = () => {
  schedule('0 6 * * *', blinkOfTheDayCron);

  // eslint-disable-next-line no-console
  console.log('Blink of the day cron started!');
};
