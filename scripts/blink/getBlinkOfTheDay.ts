import { getBlinkOfTheDay } from '../../src/blinkist/getBlinkOfTheDay';

(async () => {
  const blinkOfTheDay = await getBlinkOfTheDay();

  // eslint-disable-next-line no-console
  console.log(blinkOfTheDay);
})();
