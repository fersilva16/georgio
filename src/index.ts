import { blinkOfTheDayCronStart } from './blinkist/blinkOfTheDayCronStart';
import { config } from './config';
import { commands } from './discord/commands/commands';
import { registerCommands } from './discord/commands/registerCommands';
import { discord } from './discord/discord';
import { reportError } from './errors/reportError';
import { habitCronStart } from './habits/habitCronStart';

discord.on('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Georgio is online!');

  habitCronStart();

  blinkOfTheDayCronStart();

  registerCommands();
});

discord.on('interactionCreate', (interaction) => {
  if (!interaction.isCommand()) return;

  const command = commands.find(
    (command) => command.data.name === interaction.command?.name,
  );

  if (!command) {
    return;
  }

  command.execute(interaction);
});

process.on('uncaughtException', reportError);
process.on('unhandledRejection', reportError);

discord.login(config.DISCORD_BOT_TOKEN);
