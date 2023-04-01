import { RRule } from 'rrule';

import type { RRuleOptions } from './RRuleOptions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const rruleCreate = ({ duration, ...options }: RRuleOptions) => {
  const rrule = new RRule(options);

  return rrule;
};
