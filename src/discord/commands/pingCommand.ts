import type { Command } from './command';

export const pingCommand: Command = {
  data: {
    name: 'ping',
    description: 'Ping!',
  },

  execute: async (interaction) => {
    await interaction.reply({
      content: `🏓 Pong! ${Date.now() - interaction.createdTimestamp}ms`,
    });
  },
};
