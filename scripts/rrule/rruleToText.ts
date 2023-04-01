import { RRule } from 'rrule';

import type { RRuleOptions } from '../../apps/bot/src/rrule/RRuleOptions';
import { rruleToText } from '../../apps/bot/src/rrule/rruleToText';

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
  weekOnMondayTuesdayWednesdayThursday: {
    freq: RRule.WEEKLY,
    byweekday: [RRule.MO, RRule.TU, RRule.WE, RRule.TH],
  },
  weekOnSunday: {
    freq: RRule.WEEKLY,
    byweekday: RRule.SU,
  },
  weeklyOnWednesday: {
    freq: RRule.WEEKLY,
    byweekday: RRule.WE,
  },
  monthly1st: {
    freq: RRule.MONTHLY,
    bymonthday: 1,
  },
  monthlyFirstSunday: {
    freq: RRule.MONTHLY,
    byweekday: RRule.SU.nth(1),
  },
} satisfies Record<string, Partial<RRuleOptions>>;

(async () => {
  const options = defaults['monthlyFirstSunday'];

  // eslint-disable-next-line no-console
  console.log(rruleToText(options));
})();
