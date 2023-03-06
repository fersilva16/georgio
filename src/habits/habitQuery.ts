import { DateTime } from 'luxon';

import type { Habit } from './Habit';
import { config } from '../config';
import type { Cursor } from '../cursor/Cursor';
import type { QueryFunctionOptions } from '../cursor/QueryFunction';
import { withCursor } from '../cursor/withCursor';
import { notion } from '../notion/notion';

export const habitQuery = async ({
  cursor,
  ...options
}: QueryFunctionOptions = {}): Promise<Cursor<Habit>> => {
  const habits = await notion.databases.query({
    ...options,
    database_id: config.NOTION_HABIT_DATABASE,
    start_cursor: cursor,
  });

  const results = habits.results.map((habit: any) => ({
    id: habit.id,
    icon: habit.icon?.emoji,
    name: habit.properties['Name']?.title[0].text.content,
    startDate: DateTime.fromISO(habit.properties['Date'].date.start),
    endDate:
      habit.properties['Date'].date.end &&
      DateTime.fromISO(habit.properties['Date'].date.end),
    done: habit.properties['Done'].checkbox,
    doneAt:
      habit.properties['Done at'].date?.start &&
      DateTime.fromISO(habit.properties['Done at'].date.start),
    rule: habit.properties['Rule'].relation[0]?.id,
  }));

  return withCursor(habits, results);
};
