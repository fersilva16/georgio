import MovieDB from 'node-themoviedb';

import { config } from '../config';

export const tmdb = new MovieDB(config.TMDB_API_KEY);
