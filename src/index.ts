import 'dotenv-safe/config';
import { config } from './config';
import { discord } from './discord';

discord.on('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Georgio is online!');
});

discord.login(config.DISCORD_BOT_TOKEN);
