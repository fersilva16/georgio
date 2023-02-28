import { DateTime } from 'luxon';

import { config } from '../config';
import { notion } from '../notion/notion';

export type HabitRule = {
  icon: string;
  name: string;
  startDate: DateTime;
  rule: string;
  active: boolean;
};

export const habitRuleGet = async (): Promise<HabitRule[]> => {
  const habitRules = await notion.databases.query({
    database_id: config.NOTION_HABIT_RULE_DATABASE,
  });

  return habitRules.results.map((page: any) => ({
    icon: page.icon?.emoji,
    name: page.properties['Name']?.title[0].text.content,
    startDate: DateTime.fromISO(page.properties['Start date'].date.start),
    rule: page.properties['Rule'].rich_text[0].text.content,
    active: page.properties['Active'].checkbox,
  }));
};
