import { app } from './app';
import { config } from './config';
import { discord } from './discord/discord';
import { reportError } from './errors/reportError';
import { habitSyncCronStart } from './habits/habitSyncCronStart';
import { showEnrichCronStart } from './show/showEnrichCronStart';

habitSyncCronStart();

showEnrichCronStart();

process.on('uncaughtException', reportError);
process.on('unhandledRejection', reportError);

discord.login(config.DISCORD_BOT_TOKEN);

app.listen(config.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${config.PORT}`);
});
