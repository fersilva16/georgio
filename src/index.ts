import 'dotenv-safe/config';

import { config } from './config';
import { discord } from './discord';
import { habitCronStart } from './habits/habitCronStart';

discord.on('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Georgio is online!');
});

discord.login(config.DISCORD_BOT_TOKEN);

habitCronStart();
