import { habitGet } from '../../src/habits/habitGet';

(async () => {
  const [id] = process.argv.slice(2);

  if (!id) {
    // eslint-disable-next-line no-console
    console.log(
      [
        'Error: missing id',
        'Usage: yarn tsx scripts/habits/habitGet.ts <id>',
      ].join('\n'),
    );

    return;
  }

  const habit = await habitGet(id);

  // eslint-disable-next-line no-console
  console.log(habit);
})();
