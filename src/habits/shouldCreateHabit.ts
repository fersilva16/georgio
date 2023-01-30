import { DateTime } from 'luxon';

import type { DateConfig } from '../dateConfig/DateConfig';

export const shouldCreateHabit = (startDate: DateTime, delay: DateConfig) => {
  const today = DateTime.now().startOf('day');

  const difference = today.diff(startDate, delay.type);

  return difference.days % delay.value === 0;
};
