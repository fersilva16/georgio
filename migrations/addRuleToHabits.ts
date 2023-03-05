import { cursorProcessing } from '../src/cursor/cursorProcessing';
import { habitRuleGetAll } from '../src/habitRule/habitRuleGetAll';
import { habitQuery } from '../src/habits/habitQuery';
import { habitUpdate } from '../src/habits/habitUpdate';

(async () => {
  const habitRules = await habitRuleGetAll();

  await cursorProcessing(habitQuery, async (habit) => {
    const habitRule = habitRules.find(
      (habitRule) => habitRule.name === habit.name,
    );

    if (!habitRule) {
      // eslint-disable-next-line no-console
      console.log(`No habit rule for ${habit.name} (${habit.id})`);

      return;
    }

    await habitUpdate({
      id: habit.id,
      rule: habitRule.id,
    });

    // eslint-disable-next-line no-console
    console.log(`Habit ${habit.name} (${habit.id}) updated!`);
  });
})();
