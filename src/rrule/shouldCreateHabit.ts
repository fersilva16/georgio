import { DateTime } from 'luxon';

import { rruleCreate } from './rruleCreate';
import type { RRuleOptions } from './RRuleOptions';

export const shouldCreateHabit = (options: RRuleOptions) => {
  const rrule = rruleCreate(options);
  const today = DateTime.now().startOf('day');

  const dates = rrule.between(
    today.startOf('day').toJSDate(),
    today.endOf('day').toJSDate(),
  );

  return !!dates.length;
};
