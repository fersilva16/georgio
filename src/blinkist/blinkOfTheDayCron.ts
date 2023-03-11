import { ChannelType, EmbedBuilder } from 'discord.js';
import { NodeHtmlMarkdown } from 'node-html-markdown';

import { getBlinkOfTheDay } from './getBlinkOfTheDay';
import { config } from '../config';
import { discord } from '../discord/discord';

export const blinkOfTheDayCron = async () => {
  const blinkOfTheDay = await getBlinkOfTheDay();

  if (!blinkOfTheDay) {
    return;
  }

  const channel = await discord.channels.fetch(
    config.BLINK_OF_THE_DAY_CHANNEL_ID,
  );

  if (channel?.type !== ChannelType.GuildText) {
    // eslint-disable-next-line no-console
    console.log(
      'Invalid blink of the day channel:',
      config.BLINK_OF_THE_DAY_CHANNEL_ID,
    );

    return;
  }

  await channel.send({
    embeds: [
      new EmbedBuilder()
        .setTitle(blinkOfTheDay.title)
        .setDescription(
          [
            `**${blinkOfTheDay.subtitle}**`,
            NodeHtmlMarkdown.translate(blinkOfTheDay.about),
          ].join('\n\n'),
        )
        .setFooter({ text: blinkOfTheDay.author })
        .setThumbnail(blinkOfTheDay.image)
        .setColor('#2ce080')
        .setTimestamp(new Date()),
    ],
  });
};
