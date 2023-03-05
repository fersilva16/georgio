import type { DateTime } from 'luxon';

import { config } from '../config';
import { notion } from '../notion/notion';

type HabitCreateArgs = {
  title: string;
  startDate: DateTime;
  endDate?: DateTime;
  icon?: string;
  rule: string;
};

export const habitCreate = async ({
  title,
  startDate,
  endDate,
  icon,
  rule,
}: HabitCreateArgs) => {
  const getIconArgs = () => {
    if (!icon) return {};

    return {
      icon: {
        type: 'emoji',
        emoji: icon as any,
      },
    } as any;
  };

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
      Rule: {
        type: 'relation',
        relation: [
          {
            id: rule,
          },
        ],
      },
    },
    ...getIconArgs(),
  });
};
