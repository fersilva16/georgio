import { getBlinkOfTheDay } from '../../apps/bot/src/blinkist/getBlinkOfTheDay';

(async () => {
  const blinkOfTheDay = await getBlinkOfTheDay();

  // eslint-disable-next-line no-console
  console.log(blinkOfTheDay);
})();
