import type { Habit } from './Habit';
import { habitMap } from './habitMap';
import { notion } from '../notion/notion';

export const habitGet = async (id: string): Promise<Habit> => {
  const habit = await notion.pages.retrieve({
    page_id: id,
  });

  return habitMap(habit);
};
