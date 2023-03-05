import { DateTime } from 'luxon';

import type { Habit } from './Habit';
import { config } from '../config';
import type { Cursor } from '../cursor/Cursor';
import { withCursor } from '../cursor/withCursor';
import { notion } from '../notion/notion';

export const habitGetAll = async (cursor?: string): Promise<Cursor<Habit>> => {
  const habits = await notion.databases.query({
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
    Done: habit.properties['Done'].checkbox,
    Rule: habit.properties['Rule'].relation[0]?.id,
  }));

  return withCursor(habits, results);
};
