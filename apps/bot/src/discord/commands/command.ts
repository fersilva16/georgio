import type { ApplicationCommandData, CommandInteraction } from 'discord.js';

export type Command = {
  data: ApplicationCommandData;

  execute: (interaction: CommandInteraction) => Promise<void> | void;
};
