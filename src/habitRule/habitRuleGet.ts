import type { HabitRule } from './HabitRule';
import { habitRuleMap } from './habitRuleMap';
import { notion } from '../notion/notion';

export const habitRuleGet = async (id: string): Promise<HabitRule> => {
  const habitRule = await notion.pages.retrieve({
    page_id: id,
  });

  return habitRuleMap(habitRule);
};
