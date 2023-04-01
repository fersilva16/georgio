import type { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

import type { Cursor } from './Cursor';

export type QueryFunctionOptions = {
  cursor?: string;
  sorts?: QueryDatabaseParameters['sorts'];
  filter?: QueryDatabaseParameters['filter'];
};

export type QueryFunction<T> = (
  options: QueryFunctionOptions,
) => Promise<Cursor<T>>;
