import { browser } from 'webextension-polyfill-ts';

import { inboxAddCommand } from './inboxAddCommand';
import { saveCommand } from './saveCommand';
import type { RuntimeMessage } from '../RuntimeMessage';

browser.runtime.onMessage.addListener((message: RuntimeMessage, sender) => {
  if (message?.target !== 'background') return;

  const { data } = message;

  if (data?.type === 'inboxAdd') inboxAddCommand(message, sender);
});

browser.commands.onCommand.addListener((command: string) => {
  if (command === 'save') saveCommand();
});
