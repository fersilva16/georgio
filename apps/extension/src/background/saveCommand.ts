import { browser } from 'webextension-polyfill-ts';

import { getCurrentTab } from './getCurrentTab';
import type { RuntimeMessage } from '../RuntimeMessage';

type SaveCommandArgs = {
  remove?: boolean;
};

export const saveCommand = async ({ remove }: SaveCommandArgs = {}) => {
  const tab = await getCurrentTab();

  if (!tab) {
    return;
  }

  // eslint-disable-next-line no-console
  console.log(`Saving page: ${tab.url}`);

  browser.tabs.sendMessage(tab.id!, {
    target: 'content',
    data: {
      type: 'savePage',
      remove,
    },
  } satisfies RuntimeMessage);
};
