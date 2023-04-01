import type { HabitRule } from './HabitRule';
import { habitRuleMap } from './habitRuleMap';
import { config } from '../config';
import type { Cursor } from '../cursor/Cursor';
import type { QueryFunctionOptions } from '../cursor/QueryFunction';
import { withCursor } from '../cursor/withCursor';
import { notion } from '../notion/notion';

export const habitRuleQuery = async ({
  cursor,
  ...options
}: QueryFunctionOptions = {}): Promise<Cursor<HabitRule>> => {
  const habitRules = await notion.databases.query({
    ...options,
    database_id: config.NOTION_HABIT_RULE_DATABASE,
    start_cursor: cursor,
  });

  const results = habitRules.results.map(habitRuleMap);

  return withCursor(habitRules, results);
};
