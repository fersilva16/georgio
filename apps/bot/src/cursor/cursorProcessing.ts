import type { QueryFunction, QueryFunctionOptions } from './QueryFunction';

export const cursorProcessing = async <T, R = void>(
  query: QueryFunction<T>,
  processItem: (item: T) => Promise<R> | R,
  options: QueryFunctionOptions = {},
  prevResults: R[] = [],
): Promise<R[]> => {
  const { items, hasMore, nextCursor } = await query(options);

  const results = prevResults;

  for (const item of items) {
    const result = await processItem(item);

    results.push(result);
  }

  if (hasMore) {
    return cursorProcessing(
      query,
      processItem,
      {
        ...options,
        cursor: nextCursor,
      },
      results,
    );
  }

  return results;
};
