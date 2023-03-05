import { DateTime } from 'luxon';

import type { HabitRule } from './HabitRule';
import { config } from '../config';
import type { Cursor } from '../cursor/Cursor';
import type { QueryFunctionOptions } from '../cursor/QueryFunction';
import { withCursor } from '../cursor/withCursor';
import { notion } from '../notion/notion';

export const habitRuleGetAll = async (
  options: QueryFunctionOptions = {},
): Promise<Cursor<HabitRule>> => {
  const habitRules = await notion.databases.query({
    ...options,
    database_id: config.NOTION_HABIT_RULE_DATABASE,
  });

  const results = habitRules.results.map((page: any) => ({
    id: page.id,
    icon: page.icon?.emoji,
    name: page.properties['Name']?.title[0].text.content,
    startDate: DateTime.fromISO(page.properties['Start date'].date.start),
    rule: page.properties['Rule'].rich_text[0].text.content,
    active: page.properties['Active'].checkbox,
  }));

  return withCursor(habitRules, results);
};
