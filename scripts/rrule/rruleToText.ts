import { RRule } from 'rrule';

import type { RRuleOptions } from '../../src/rrule/RRuleOptions';
import { rruleToText } from '../../src/rrule/rruleToText';

const defaults = {
  daily: {
    freq: RRule.DAILY,
  },
  weeklyFor1Week: {
    freq: RRule.WEEKLY,
    duration: {
      value: 1,
      type: 'week',
    },
  },
} satisfies Record<string, Partial<RRuleOptions>>;

(async () => {
  const options = defaults['weeklyFor1Week'];

  // eslint-disable-next-line no-console
  console.log(rruleToText(options));
})();
