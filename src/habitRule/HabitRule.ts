import type { DateTime } from 'luxon';

export type HabitRule = {
  id: string;
  icon: string;
  name: string;
  startDate: DateTime;
  rule: string;
  active: boolean;
};
