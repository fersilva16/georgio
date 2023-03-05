import { habitQuery } from '../../src/habits/habitQuery';

(async () => {
  const habits = await habitQuery();

  // eslint-disable-next-line no-console
  console.log(habits);
})();
