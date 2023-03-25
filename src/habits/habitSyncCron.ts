import { DateTime } from 'luxon';

import { habitCreate } from './habitCreate';
import { habitQuery } from './habitQuery';
import { habitUpdate } from './habitUpdate';
import { cursorProcessing } from '../cursor/cursorProcessing';
import { reportError } from '../errors/reportError';
import { habitRuleQuery } from '../habitRule/habitRuleQuery';
import { durationToDays } from '../rrule/durationToDays';
import { rruleFromText } from '../rrule/rruleFromText';
import { shouldCreateHabit } from '../rrule/shouldCreateHabit';

export const habitSyncCron = async () => {
  try {
    // eslint-disable-next-line no-console
    console.log('Syncing habits');

    await cursorProcessing(habitRuleQuery, async (habitRule) => {
      if (!habitRule.active) {
        return;
      }

      // eslint-disable-next-line no-console
      console.log(`Creating Habit "${habitRule.name}"`);

      const options = rruleFromText(habitRule.startDate, habitRule.rule);

      const shouldCreate = shouldCreateHabit(options);

      if (!shouldCreate) {
        return;
      }

      const durationInDays = durationToDays(options);

      const startDate = DateTime.now().startOf('day');
      const endDate =
        durationInDays > 1
          ? startDate.plus({ days: durationInDays - 1 })
          : undefined;

      await habitCreate({
        title: habitRule.name,
        startDate,
        endDate,
        icon: habitRule.icon,
        rule: habitRule.id,
      });

      // eslint-disable-next-line no-console
      console.log(
        [
          'Habit',
          `"${habitRule.name} (${habitRule.rule})"`,
          'created with',
          `startDate "${startDate.toFormat('dd/MM/yyyy')}"`,
          endDate && 'and',
          endDate && `endDate "${endDate.toFormat('dd/MM/yyyy')}"`,
        ]
          .filter(Boolean)
          .join(' '),
      );
    });

    await cursorProcessing(
      habitQuery,
      async (habit) => {
        const yesterday = DateTime.now().minus({ day: 1 });

        await habitUpdate({
          id: habit.id,
          doneAt: yesterday,
        });
      },
      {
        filter: {
          and: [
            {
              property: 'Done',
              checkbox: {
                equals: true,
              },
            },
            {
              property: 'Done at',
              date: {
                is_empty: true,
              },
            },
          ],
        },
      },
    );

    // await cursorProcessing(habitRuleQuery, async (habitRule) => {
    //   const habitId = habitRule.habits.at(-1);

    //   if (!habitId) {
    //     return;
    //   }

    //   const yesterday = DateTime.now().minus({ day: 1 });
    //   const habit = await habitGet(habitId);

    //   if (!habit.endDate.hasSame(yesterday, 'day')) {
    //     return;
    //   }

    //   if (habit.doneAt) {
    //     await habitRuleUpdate({
    //       id: habitRule.id,
    //       strike: 0,
    //     });

    //     return;
    //   }

    //   const strike = habitRule.strike + 1;
    //   const biggestStrike =
    //     strike > habitRule.biggestStrike ? strike : habitRule.biggestStrike;

    //   await habitRuleUpdate({
    //     id: habitRule.id,
    //     strike,
    //     biggestStrike,
    //   });
    // });
  } catch (error) {
    reportError(error as Error);
  }
};
