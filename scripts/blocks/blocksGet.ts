import { blocksGet } from '../../src/blocks/blocksGet';

(async () => {
  const [id] = process.argv.slice(2);

  if (!id) {
    // eslint-disable-next-line no-console
    console.log(
      [
        'Error: missing id',
        'Usage: yarn tsx scripts/blocks/blocksGet.ts <id>',
      ].join('\n'),
    );
  }

  const blocks = await blocksGet(id);

  // eslint-disable-next-line no-console
  console.log(blocks);
})();
