import { DateTime } from 'luxon';

import type { Habit } from './Habit';
import { notion } from '../notion/notion';

export const habitGet = async (id: string): Promise<Habit> => {
  const habit = (await notion.pages.retrieve({
    page_id: id,
  })) as any;

  return {
    id: habit.id,
    icon: habit.icon?.emoji,
    name: habit.properties['Name']?.title[0].text.content,
    startDate: DateTime.fromISO(habit.properties['Date'].date.start),
    endDate:
      habit.properties['Date'].date.end &&
      DateTime.fromISO(habit.properties['Date'].date.end),
    done: habit.properties['Done'].checkbox,
    rule: habit.properties['Rule'].relation[0]?.id,
  };
};
