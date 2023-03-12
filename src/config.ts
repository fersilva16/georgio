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
  NOTION_SHOW_DATABASE: process.env.NOTION_SHOW_DATABASE as string,

  TZ: process.env.TZ as string,
  DEBUG: process.env.DEBUG === 'true',

  GUILD_ID: process.env.GUILD_ID as string,
  REPORT_CHANNEL_ID: process.env.REPORT_CHANNEL_ID as string,
  BLINK_OF_THE_DAY_CHANNEL_ID: process.env
    .BLINK_OF_THE_DAY_CHANNEL_ID as string,

  TMDB_API_KEY: process.env.TMDB_API_KEY as string,
};
