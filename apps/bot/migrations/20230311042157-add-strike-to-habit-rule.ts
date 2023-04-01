import { DateTime } from 'luxon';

import { cursorProcessing } from '../src/cursor/cursorProcessing';
import { habitRuleQuery } from '../src/habitRule/habitRuleQuery';
import { habitRuleUpdate } from '../src/habitRule/habitRuleUpdate';
import { habitGetAll } from '../src/habits/habitGetAll';

(async () => {
  const today = DateTime.now();

  await cursorProcessing(habitRuleQuery, async (habitRule) => {
    const habits = await habitGetAll({
      filter: {
        property: 'Rule',
        relation: {
          contains: habitRule.id,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'ascending',
        },
      ],
    });

    let strike = 0;
    let biggestStrike = 0;

    for (const habit of habits) {
      if (habit.endDate.hasSame(today, 'day')) {
        // ignore today habits

        continue;
      }

      if (habit.doneAt) {
        strike += 1;

        if (strike > biggestStrike) {
          biggestStrike = strike;
        }

        continue;
      }

      strike = 0;
    }

    await habitRuleUpdate({
      id: habitRule.id,
      strike,
      biggestStrike,
    });

    // eslint-disable-next-line no-console
    console.log(`HabitRule ${habitRule.name} (${habitRule.id}) updated!`);
  });
})();
