import { DateTime } from 'luxon';

import { habitCreate } from '../../src/habits/habitCreate';

(async () => {
  await habitCreate({
    title: 'Testing',
    startDate: DateTime.now(),
    icon: '🇪🇸',
  });
})();
