import { blocksGetAll } from '../../src/blocks/blocksGetAll';

(async () => {
  const [id] = process.argv.slice(2);

  if (!id) {
    // eslint-disable-next-line no-console
    console.log(
      [
        'Error: missing id',
        'Usage: yarn tsx scripts/blocks/blocksGetAll.ts <id>',
      ].join('\n'),
    );
  }

  const blocks = await blocksGetAll(id);

  // eslint-disable-next-line no-console
  console.log(blocks);
})();
