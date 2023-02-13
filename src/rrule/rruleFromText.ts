import type { DateTime, DurationUnit } from 'luxon';
import { parseText } from 'rrule/dist/esm/nlp';

import type { RRuleOptions } from './RRuleOptions';

export const rruleFromText = (
  startDate: DateTime,
  text: string,
): RRuleOptions => {
  const [rruleText, duration] = text.split('for').map((s) => s.trim());

  const options = parseText(rruleText);

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
    ...options,
    ...getDuration(),
  };
};
