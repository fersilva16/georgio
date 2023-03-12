import type { Objects } from 'node-themoviedb';

import { tmdbImageUrl } from './tmdbImageUrl';
import type { TmdbShow } from './TmdbShow';

export const tmdbMovieShowMap = (
  movie: Objects.MovieWithMediaType,
): TmdbShow => ({
  title: movie.title,
  poster: movie.poster_path && tmdbImageUrl(movie.poster_path),
  backdrop: movie.backdrop_path && tmdbImageUrl(movie.backdrop_path),
});
