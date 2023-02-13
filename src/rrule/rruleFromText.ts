import type { DateTime, DurationUnit } from 'luxon';
import { RRule } from 'rrule';

import type { RRuleOptions } from './RRuleOptions';

export const rruleFromText = (
  startDate: DateTime,
  text: string,
): RRuleOptions => {
  const [rruleText, duration] = text.split('for').map((s) => s.trim());

  const rrule = RRule.fromText(rruleText);

  const getDuration = () => {
    if (!duration) return {};

    const [value, type] = duration.split(' ');

    return {
      duration: {
        value: parseInt(value),
        type: type as DurationUnit,
      },
    };
  };

  return {
    ...rrule.options,
    ...getDuration(),
  };
};
