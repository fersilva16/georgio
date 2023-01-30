import type { DurationUnit } from 'luxon';

import type { DateConfig } from './DateConfig';

export const parseDateConfig = (date: string): DateConfig => {
  const [value, type] = date.split(' ');

  return {
    value: parseInt(value),
    type: type as DurationUnit,
  };
};
