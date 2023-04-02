import { browser } from 'webextension-polyfill-ts';

export const getCurrentTab = async () => {
  const [tab] = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });

  return tab;
};
