import { cursorProcessing } from '../src/cursor/cursorProcessing';
import { habitGetAll } from '../src/habits/habitGetAll';
import { habitRuleGet } from '../src/habits/habitRuleGet';
import { habitUpdate } from '../src/habits/habitUpdate';

(async () => {
  const habitRules = await habitRuleGet();

  await cursorProcessing(habitGetAll, async (habit) => {
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
