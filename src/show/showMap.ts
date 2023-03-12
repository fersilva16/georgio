import type { Show } from './Show';

export const showMap = (show: any): Show => ({
  id: show.id,
  cover: show.cover?.external,
  title: show.properties['Title']?.title[0].text.content,
  enriched: show.properties['Enriched'].checkbox,
});
