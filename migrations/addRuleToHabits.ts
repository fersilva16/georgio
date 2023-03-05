import { habitGetAll } from '../src/habits/habitGetAll';
import type { HabitRule } from '../src/habits/habitRuleGet';
import { habitRuleGet } from '../src/habits/habitRuleGet';
import { habitUpdate } from '../src/habits/habitUpdate';

const process = async (habitRules: HabitRule[], cursor?: string) => {
  const habits = await habitGetAll(cursor);

  for (const habit of habits.items) {
    const habitRule = habitRules.find(
      (habitRule) => habitRule.name === habit.name,
    );

    if (!habitRule) {
      // eslint-disable-next-line no-console
      console.log(`No habit rule for ${habit.name} (${habit.id})`);

      continue;
    }

    await habitUpdate({
      id: habit.id,
      rule: habitRule.id,
    });

    // eslint-disable-next-line no-console
    console.log(`Habit ${habit.name} (${habit.id}) updated!`);
  }

  if (habits.hasMore) {
    await process(habitRules, habits.nextCursor);
  }
};

(async () => {
  const habitRules = await habitRuleGet();

  await process(habitRules);
})();
