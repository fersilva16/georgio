import 'dotenv-safe/config';
import { client } from './client';
import { config } from './config';

client.on('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Georgio is online!');
});

client.login(config.DISCORD_BOT_TOKEN);
