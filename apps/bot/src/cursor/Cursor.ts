export type Cursor<T> = {
  items: T[];
  hasMore: boolean;
  nextCursor: string;
};
