import type { Objects } from 'node-themoviedb';

import { tmdbImageUrl } from './tmdbImageUrl';
import type { TmdbShow } from './TmdbShow';

export const tmdbTVShowShowMap = (
  tvShow: Objects.TVShowWithMediaType,
): TmdbShow => ({
  title: tvShow.name,
  poster: tvShow.poster_path && tmdbImageUrl(tvShow.poster_path),
  backdrop: tvShow.backdrop_path && tmdbImageUrl(tvShow.backdrop_path),
});
