import { commands } from './commands';
import { config } from '../../config';
import { discord } from '../discord';

export const registerCommands = async () => {
  // eslint-disable-next-line no-console
  console.log('Registering commands...');

  const guild = await discord.guilds.fetch(config.GUILD_ID);

  for (const command of commands) {
    await guild.commands.create(command.data);

    // eslint-disable-next-line no-console
    console.log(`Command "${command.data.name}" registered`);
  }
};
