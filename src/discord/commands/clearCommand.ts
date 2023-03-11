import { ChannelType } from 'discord.js';

import type { Command } from './command';
import { discord } from '../discord';

export const clearCommand: Command = {
  data: {
    name: 'clear',
    description: 'Clear the chat!',
  },

  execute: async (interaction) => {
    await interaction.deferReply({
      ephemeral: true,
    });

    const channel = await discord.channels.fetch(interaction.channelId);

    if (channel?.type !== ChannelType.GuildText) {
      await interaction.editReply({
        content: 'Cannot clear this chat',
      });

      return;
    }

    const messages = await channel.bulkDelete(100);

    await interaction.editReply({
      content: `${messages.size} messages deleted`,
    });
  },
};
