import { RRule } from 'rrule';

import type { RRuleOptions } from '../../src/rrule/RRuleOptions';
import { rruleToText } from '../../src/rrule/rruleToText';

const defaults = {
  daily: {
    freq: RRule.DAILY,
  },
  weekday: {
    freq: RRule.WEEKLY,
    byweekday: [RRule.MO, RRule.TU, RRule.WE, RRule.TH, RRule.FR],
  },
  weeklyFor1Week: {
    freq: RRule.WEEKLY,
    duration: {
      value: 1,
      type: 'week',
    },
  },
  weeklyOnWednesday: {
    freq: RRule.WEEKLY,
    byweekday: RRule.WE,
  },
  monthly1st: {
    freq: RRule.MONTHLY,
    bymonthday: 1,
  },
} satisfies Record<string, Partial<RRuleOptions>>;

(async () => {
  const options = defaults['weekday'];

  // eslint-disable-next-line no-console
  console.log(rruleToText(options));
})();
