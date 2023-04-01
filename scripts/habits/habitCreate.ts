import { DateTime } from 'luxon';

import { habitCreate } from '../../apps/bot/src/habits/habitCreate';

(async () => {
  await habitCreate({
    title: 'Testing',
    startDate: DateTime.now(),
    icon: '🇪🇸',
    rule: '33230a66-c77f-4184-aa9b-95280e8ebd64',
  });
})();
