import type { Cursor } from './Cursor';

export const withCursor = <T>(query: any, items: T[]): Cursor<T> => ({
  items,
  hasMore: query.has_more,
  nextCursor: query.next_cursor,
});
