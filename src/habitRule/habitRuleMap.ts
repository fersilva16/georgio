import { DateTime } from 'luxon';

import type { HabitRule } from './HabitRule';

export const habitRuleMap = (habitRule: any): HabitRule => ({
  id: habitRule.id,
  icon: habitRule.icon?.emoji,
  name: habitRule.properties['Name']?.title[0].text.content,
  startDate: DateTime.fromISO(habitRule.properties['Start date'].date.start),
  rule: habitRule.properties['Rule'].rich_text[0].text.content,
  active: habitRule.properties['Active'].checkbox,
});
