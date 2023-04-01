import { notion } from '../notion/notion';

type HabitRuleUpdateArgs = {
  id: string;
  strike?: number;
  biggestStrike?: number;
};

export const habitRuleUpdate = async ({
  id,
  strike,
  biggestStrike,
}: HabitRuleUpdateArgs) => {
  const getStrikeArgs = () => {
    if (typeof strike !== 'number') {
      return {};
    }

    return {
      Strike: {
        type: 'number',
        number: strike,
      },
    } as any;
  };

  const getBiggestStrikeArgs = () => {
    if (typeof strike !== 'number') {
      return {};
    }

    return {
      'Biggest strike': {
        type: 'number',
        number: biggestStrike,
      },
    } as any;
  };

  await notion.pages.update({
    page_id: id,
    properties: {
      ...getStrikeArgs(),
      ...getBiggestStrikeArgs(),
    },
  });
};
