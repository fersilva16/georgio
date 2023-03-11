import type { Habit } from './Habit';
import { habitQuery } from './habitQuery';
import { cursorProcessing } from '../cursor/cursorProcessing';
import type { QueryFunctionOptions } from '../cursor/QueryFunction';

export const habitGetAll = (
  options?: QueryFunctionOptions,
): Promise<Habit[]> => {
  return cursorProcessing(habitQuery, (habit) => habit, options);
};
