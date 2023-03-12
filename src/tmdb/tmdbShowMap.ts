import type { Objects } from 'node-themoviedb';

import { tmdbMovieShowMap } from './tmdbMovieShowMap';
import type { TmdbShow } from './TmdbShow';
import { tmdbTVShowShowMap } from './tmdbTVShowShowMap';

export const tmdbShowMap = (
  show: Objects.MovieWithMediaType | Objects.TVShowWithMediaType,
): TmdbShow => {
  if (show.media_type === 'movie') {
    return tmdbMovieShowMap(show);
  }

  return tmdbTVShowShowMap(show);
};
