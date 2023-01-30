import { Duration } from 'luxon';

import type { DateConfig } from './DateConfig';

export const dateConfigToDays = (dateConfig: DateConfig) => {
  const duration = Duration.fromObject({ [dateConfig.type]: dateConfig.value });

  return duration.as('days');
};
