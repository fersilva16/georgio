import type { Runtime} from 'webextension-polyfill-ts';
import { browser } from 'webextension-polyfill-ts';

import { inboxAdd } from '../inbox/inboxAdd';
import type { InboxAddRuntimeMessage } from '../RuntimeMessage';

export const inboxAddCommand = (
  { data }: InboxAddRuntimeMessage,
  sender: Runtime.MessageSender,
) => {
  if (sender.tab?.id) browser.tabs.remove(sender.tab.id);

  inboxAdd(data);
};
