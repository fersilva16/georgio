import { DateTime } from 'luxon';

import { rruleFromText } from '../../src/rrule/rruleFromText';

(async () => {
  const text = 'Every week for 1 week';

  // eslint-disable-next-line no-console
  console.log(rruleFromText(DateTime.now(), text));
})();
