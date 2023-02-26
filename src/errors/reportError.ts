import { ChannelType, EmbedBuilder } from 'discord.js';

import { config } from '../config';
import { discord } from '../discord/discord';

export const reportError = async (error: Error) => {
  // eslint-disable-next-line no-console
  console.log(error); // fallback

  const channel = await discord.channels.fetch(config.REPORT_CHANNEL_ID);

  if (channel?.type !== ChannelType.GuildText) {
    // eslint-disable-next-line no-console
    console.log('Invalid report channel:', config.REPORT_CHANNEL_ID);

    return;
  }

  await channel.send({
    embeds: [
      new EmbedBuilder()
        .setTitle(error.message)
        .setDescription(`\`\`\`${error.stack}\`\`\``)
        .setTimestamp(new Date()),
    ],
  });
};
