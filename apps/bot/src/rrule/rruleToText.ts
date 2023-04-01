import { RRule } from 'rrule';

import type { RRuleOptions } from './RRuleOptions';

export const rruleToText = ({ duration, ...options }: RRuleOptions): string => {
  const rrule = new RRule(options);

  return [rrule.toText(), duration && `for ${duration.value} ${duration.type}`]
    .filter(Boolean)
    .join(' ');
};
