import { DateTime } from 'luxon';
import { RRule } from 'rrule';

import type { RRuleOptions } from './RRuleOptions';

export const shouldCreateHabit = (options: RRuleOptions) => {
  const rrule = new RRule(options);
  const today = DateTime.now().startOf('day');

  const dates = rrule.between(
    today.startOf('day').toJSDate(),
    today.endOf('day').toJSDate(),
  );

  return !!dates.length;
};
