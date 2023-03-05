import type { DateTime } from 'luxon';

import { notion } from '../notion/notion';

type HabitUpdateArgs = {
  id: string;
  rule?: string;
  doneAt?: DateTime;
};

export const habitUpdate = async ({ id, rule, doneAt }: HabitUpdateArgs) => {
  const getRuleArgs = () => {
    if (!rule) {
      return {};
    }

    return {
      Rule: {
        type: 'relation',
        relation: [
          {
            id: rule,
          },
        ],
      },
    } as any;
  };

  const getDoneAtArgs = () => {
    if (!doneAt) {
      return {};
    }

    return {
      'Done at': {
        type: 'date',
        date: {
          start: doneAt.toISODate(),
        },
      },
    } as any;
  };

  await notion.pages.update({
    page_id: id,
    properties: {
      ...getRuleArgs(),
      ...getDoneAtArgs(),
    },
  });
};
