import { config } from './config';
import { discord } from './discord/discord';
import { habitCronStart } from './habits/habitCronStart';

discord.on('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Georgio is online!');

  habitCronStart();
});

discord.login(config.DISCORD_BOT_TOKEN);
