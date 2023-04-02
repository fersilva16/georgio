import { browser } from 'webextension-polyfill-ts';

import { savePage } from './savePage';
import type { RuntimeMessage } from '../RuntimeMessage';

browser.runtime.onMessage.addListener((message: RuntimeMessage) => {
  if (message?.target !== 'content') return;

  const { data } = message;

  if (data?.type === 'savePage') savePage();
});
