import { Duration } from 'luxon';

import type { RRuleOptions } from './RRuleOptions';

const defaultDuration = {
  type: 'day',
  value: 1,
} satisfies RRuleOptions['duration'];

export const durationToDays = (options: RRuleOptions): number => {
  const duration = options.duration || defaultDuration;

  const durationInDays = Duration.fromObject({
    [duration.type]: duration.value,
  });

  return durationInDays.as('days');
};
