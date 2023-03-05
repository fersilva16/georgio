import { notion } from '../notion/notion';

type HabitUpdateArgs = {
  id: string;
  rule?: string;
};

export const habitUpdate = async ({ id, rule }: HabitUpdateArgs) => {
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

  await notion.pages.update({
    page_id: id,
    properties: {
      ...getRuleArgs(),
    },
  });
};
