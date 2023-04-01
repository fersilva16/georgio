import type { HabitRule } from './HabitRule';
import { habitRuleQuery } from './habitRuleQuery';
import { cursorProcessing } from '../cursor/cursorProcessing';
import type { QueryFunctionOptions } from '../cursor/QueryFunction';

export const habitRuleGetAll = (
  options?: QueryFunctionOptions,
): Promise<HabitRule[]> => {
  return cursorProcessing(habitRuleQuery, (habitRule) => habitRule, options);
};
