import { browser } from 'webextension-polyfill-ts';

import type { RuntimeMessage } from '../RuntimeMessage';

const getTitle = () => {
  const title = document.getElementsByTagName('title');

  return title.item(0)?.textContent || '';
};

export const savePage = () => {
  browser.runtime.sendMessage({
    target: 'background',
    data: {
      type: 'inboxAdd',
      title: getTitle(),
      url: location.href,
    },
  } satisfies RuntimeMessage);
};
