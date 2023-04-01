import { Client } from 'discord.js';

import { commands } from './commands/commands';
import { registerCommands } from './commands/registerCommands';

const discord = new Client<true>({
  intents: [],
});

discord.on('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Georgio is online!');

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

export { discord };
