import { habitGetAll } from '../../src/habits/habitGetAll';

(async () => {
  const habits = await habitGetAll();

  // eslint-disable-next-line no-console
  console.log(habits);
})();
