import { showQuery } from './showQuery';
import { showUpdate } from './showUpdate';
import { cursorProcessing } from '../cursor/cursorProcessing';
import { tmdbSearch } from '../tmdb/tmdbSearch';

export const showEnrichCron = async () => {
  // eslint-disable-next-line no-console
  console.log('Enriching shows');

  await cursorProcessing(
    showQuery,
    async (show) => {
      // eslint-disable-next-line no-console
      console.log(`Enriching show ${show.title}`);

      const [tmdbShow] = await tmdbSearch(show.title);

      if (!tmdbShow) {
        // eslint-disable-next-line no-console
        console.log(`Show ${show.title} not found`);

        return;
      }

      await showUpdate({
        id: show.id,
        title: tmdbShow.title,
        enriched: true,
        cover: tmdbShow.backdrop || undefined,
      });

      // eslint-disable-next-line no-console
      console.log(`Show ${tmdbShow.title} enriched!`);
    },
    {
      filter: {
        property: 'Enriched',
        checkbox: {
          equals: false,
        },
      },
    },
  );
};
