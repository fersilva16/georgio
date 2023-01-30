import { DateTime } from 'luxon';

export const shouldCreateHabit = (startDate: DateTime, delay: number) => {
  const today = DateTime.now().startOf('day');

  const difference = today.diff(startDate, 'days');

  return difference.days % delay === 0;
};
