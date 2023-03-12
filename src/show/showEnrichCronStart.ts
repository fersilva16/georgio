import { schedule } from 'node-cron';

import { showEnrichCron } from './showEnrichCron';

export const showEnrichCronStart = () => {
  schedule('*/30 * * * *', showEnrichCron);

  // eslint-disable-next-line no-console
  console.log('Show enrich cron started!');
};
