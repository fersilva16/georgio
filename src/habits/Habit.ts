import type { DateTime } from 'luxon';

export type Habit = {
  id: string;
  icon: string;
  name: string;
  startDate: DateTime;
  endDate: DateTime;
  done: boolean;
  rule: string;
};
