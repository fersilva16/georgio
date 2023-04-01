import type { DurationUnit } from 'luxon';
import type { Options } from 'rrule';

export type RRuleOptions = {
  duration?: {
    value: number;
    type: DurationUnit;
  };
} & Partial<Options>;
