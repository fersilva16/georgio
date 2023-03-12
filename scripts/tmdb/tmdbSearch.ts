import { tmdbSearch } from '../../src/tmdb/tmdbSearch';

(async () => {
  const [query] = process.argv.slice(2);

  if (!query) {
    // eslint-disable-next-line no-console
    console.log(
      [
        'Error: missing query',
        'Usage: yarn tsx scripts/tmdb/tmdbSearch.ts <query>',
      ].join('\n'),
    );

    return;
  }

  const results = await tmdbSearch(query);

  // eslint-disable-next-line no-console
  console.log(results);
})();
