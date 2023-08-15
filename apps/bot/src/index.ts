import * as Sentry from '@sentry/node';

import { app } from './app';
import { config } from './config';
import { discord } from './discord/discord';
import { reportError } from './errors/reportError';
import { showEnrichCronStart } from './show/showEnrichCronStart';

if (config.SENTRY_DSN) {
  Sentry.init({
    dsn: config.SENTRY_DSN,
  });
}

showEnrichCronStart();

process.on('uncaughtException', reportError);
process.on('unhandledRejection', reportError);

discord.login(config.DISCORD_BOT_TOKEN);

app.listen(config.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${config.PORT}`);
});
