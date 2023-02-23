import { config } from './config';
import { discord } from './discord/discord';
import { reportError } from './errors/reportError';
import { habitCronStart } from './habits/habitCronStart';

discord.on('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Georgio is online!');

  habitCronStart();
});

process.on('uncaughtException', reportError);
process.on('unhandledRejection', reportError);

discord.login(config.DISCORD_BOT_TOKEN);
