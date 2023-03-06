import { DateTime } from 'luxon';

import type { HabitRule } from './HabitRule';
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

  const results = habitRules.results.map((habitRule: any) => ({
    id: habitRule.id,
    icon: habitRule.icon?.emoji,
    name: habitRule.properties['Name']?.title[0].text.content,
    startDate: DateTime.fromISO(habitRule.properties['Start date'].date.start),
    rule: habitRule.properties['Rule'].rich_text[0].text.content,
    active: habitRule.properties['Active'].checkbox,
  }));

  return withCursor(habitRules, results);
};
