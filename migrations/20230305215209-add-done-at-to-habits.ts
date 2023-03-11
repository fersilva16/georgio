import { cursorProcessing } from '../src/cursor/cursorProcessing';
import { habitQuery } from '../src/habits/habitQuery';
import { habitUpdate } from '../src/habits/habitUpdate';

(async () => {
  await cursorProcessing(
    habitQuery,
    async (habit) => {
      await habitUpdate({
        id: habit.id,
        doneAt: habit.startDate,
      });

      // eslint-disable-next-line no-console
      console.log(`Habit ${habit.name} (${habit.id}) updated!`);
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
})();
