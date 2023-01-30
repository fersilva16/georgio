import type { DateTime } from 'luxon';

import { config } from '../config';
import { notion } from '../notion/notion';

export const habitCreate = async (
  title: string,
  startDate: DateTime,
  endDate?: DateTime,
) => {
  await notion.pages.create({
    parent: {
      database_id: config.NOTION_HABIT_DATABASE,
    },
    properties: {
      Name: {
        type: 'title',
        title: [{ text: { content: title } }],
      },
      Done: {
        type: 'checkbox',
        checkbox: false,
      },
      Date: {
        type: 'date',
        date: {
          start: startDate.toISODate(),
          end: endDate?.toISODate(),
        },
      },
    },
  });
};
