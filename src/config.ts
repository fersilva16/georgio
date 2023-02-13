import { config as dotenv } from 'dotenv-safe';

if (process.env.NODE_ENV !== 'production') {
  dotenv({
    allowEmptyValues: true,
  });
}

export const config = {
  DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN as string,

  NOTION_AUTH: process.env.NOTION_AUTH as string,
  NOTION_HABIT_DATABASE: process.env.NOTION_HABIT_DATABASE as string,
  NOTION_HABIT_RULE_DATABASE: process.env.NOTION_HABIT_RULE_DATABASE as string,

  TZ: process.env.TZ as string,
  DEBUG: process.env.DEBUG === 'true',
};
