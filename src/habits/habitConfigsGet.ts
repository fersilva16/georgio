import { DateTime } from 'luxon';

import { config } from '../config';
import type { DateConfig } from '../dateConfig/DateConfig';
import { parseDateConfig } from '../dateConfig/parseDateConfig';
import { notion } from '../notion/notion';

export type HabitConfig = {
  name: string;
  startDate: DateTime;
  delay: DateConfig;
  duration: DateConfig;
};

export const habitConfigsGet = async (): Promise<HabitConfig[]> => {
  const habitConfigs = await notion.databases.query({
    database_id: config.NOTION_HABIT_CONFIG_DATABASE,
  });

  return habitConfigs.results.map((page: any) => ({
    name: page.properties['Name']?.title[0].text.content,
    startDate: DateTime.fromISO(page.properties['Start date'].date.start),
    delay: parseDateConfig(page.properties['Delay'].rich_text[0].text.content),
    duration: parseDateConfig(
      page.properties['Duration'].rich_text[0].text.content,
    ),
  }));
};
