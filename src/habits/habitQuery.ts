import type { Habit } from './Habit';
import { habitMap } from './habitMap';
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

  const results = habits.results.map(habitMap);

  return withCursor(habits, results);
};
