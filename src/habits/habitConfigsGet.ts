import { DateTime } from 'luxon';

import { config } from '../config';
import { notion } from '../notion';

export type HabitConfig = {
  name: string;
  startDate: DateTime;
  delay: number;
  duration: number;
};

export const habitConfigsGet = async (): Promise<HabitConfig[]> => {
  const habitConfigs = await notion.databases.query({
    database_id: config.NOTION_HABIT_CONFIG_DATABASE,
  });

  return habitConfigs.results.map((page: any) => ({
    name: page.properties['Name']?.title[0].text.content,
    startDate: DateTime.fromISO(page.properties['Start date'].date.start),
    delay: page.properties['Delay'].number,
    duration: page.properties['Duration'].number,
  }));
};
