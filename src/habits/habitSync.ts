import { DateTime } from 'luxon';

import { habitCreate } from './habitCreate';
import { habitRuleGet } from './habitRuleGet';
import { reportError } from '../errors/reportError';
import { durationToDays } from '../rrule/durationToDays';
import { rruleFromText } from '../rrule/rruleFromText';
import { shouldCreateHabit } from '../rrule/shouldCreateHabit';

export const habitSync = async () => {
  // eslint-disable-next-line no-console
  console.log('Syncing habits');

  const habitRules = await habitRuleGet();

  for (const habitRule of habitRules) {
    try {
      if (!habitRule.active) {
        continue;
      }

      // eslint-disable-next-line no-console
      console.log(`Creating Habit "${habitRule.name}"`);

      const options = rruleFromText(habitRule.startDate, habitRule.rule);

      const shouldCreate = shouldCreateHabit(options);

      if (!shouldCreate) {
        continue;
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
    } catch (error) {
      reportError(error as Error);
    }
  }
};
