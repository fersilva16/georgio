import { DateTime } from 'luxon';

import type { Habit } from './Habit';

export const habitMap = (habit: any): Habit => ({
  id: habit.id,
  icon: habit.icon?.emoji,
  name: habit.properties['Name']?.title[0].text.content,
  startDate: DateTime.fromISO(habit.properties['Date'].date.start),
  endDate: habit.properties['Date'].date.end
    ? DateTime.fromISO(habit.properties['Date'].date.end)
    : DateTime.fromISO(habit.properties['Date'].date.start),
  done: habit.properties['Done'].checkbox,
  doneAt:
    habit.properties['Done at'].date?.start &&
    DateTime.fromISO(habit.properties['Done at'].date.start),
  rule: habit.properties['Rule'].relation[0]?.id,
});
