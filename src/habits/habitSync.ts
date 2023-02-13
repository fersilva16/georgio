import { DateTime } from 'luxon';

import { habitCreate } from './habitCreate';
import { habitRuleGet } from './habitRuleGet';
import { durationToDays } from '../rrule/durationToDays';
import { rruleFromText } from '../rrule/rruleFromText';
import { shouldCreateHabit } from '../rrule/shouldCreateHabit';

export const habitSync = async () => {
  // eslint-disable-next-line no-console
  console.log('Syncing habits');

  const habitRules = await habitRuleGet();

  for (const habitRule of habitRules) {
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

    await habitCreate(habitRule.name, startDate, endDate);

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
  }
};
