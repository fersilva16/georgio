import type { Objects } from 'node-themoviedb';

import { tmdb } from './tmdb';
import type { TmdbShow } from './TmdbShow';
import { tmdbShowMap } from './tmdbShowMap';

export const tmdbSearch = async (query: string): Promise<TmdbShow[]> => {
  const result = await tmdb.search.multi({
    query: {
      query,
    },
  });

  const filterShows = (
    show:
      | Objects.MovieWithMediaType
      | Objects.TVShowWithMediaType
      | Objects.PersonWithMediaType,
  ): show is Objects.MovieWithMediaType | Objects.TVShowWithMediaType =>
    show.media_type === 'movie' || show.media_type === 'tv';

  return result.data.results.filter(filterShows).map(tmdbShowMap);
};
