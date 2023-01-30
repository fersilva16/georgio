import { DateTime } from 'luxon';

import { habitConfigsGet } from './habitConfigsGet';
import { habitCreate } from './habitCreate';
import { shouldCreateHabit } from './shouldCreateHabit';
import { dateConfigToDays } from '../dateConfig/dateConfigToDays';

export const habitSync = async () => {
  const habitConfigs = await habitConfigsGet();

  for (const habitConfig of habitConfigs) {
    const shouldCreate = shouldCreateHabit(
      habitConfig.startDate,
      habitConfig.delay,
    );

    if (!shouldCreate) {
      continue;
    }

    const durationInDays = dateConfigToDays(habitConfig.duration);

    const startDate = DateTime.now().startOf('day');
    const endDate =
      durationInDays > 1
        ? startDate.plus({ days: durationInDays - 1 })
        : undefined;

    await habitCreate(habitConfig.name, startDate, endDate);

    // eslint-disable-next-line no-console
    console.log(
      'Habit',
      `"${habitConfig.name}"`,
      'created with',
      `startDate "${startDate.toFormat('dd/MM/yyyy')}"`,
      'and',
      `startDate "${endDate?.toFormat('dd/MM/yyyy')}"`,
    );
  }
};
