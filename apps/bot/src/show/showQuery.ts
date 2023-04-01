import type { Show } from './Show';
import { showMap } from './showMap';
import { config } from '../config';
import type { Cursor } from '../cursor/Cursor';
import type { QueryFunctionOptions } from '../cursor/QueryFunction';
import { withCursor } from '../cursor/withCursor';
import { notion } from '../notion/notion';

export const showQuery = async ({
  cursor,
  ...options
}: QueryFunctionOptions = {}): Promise<Cursor<Show>> => {
  const shows = await notion.databases.query({
    ...options,
    database_id: config.NOTION_SHOW_DATABASE,
    start_cursor: cursor,
  });

  const results = shows.results.map(showMap);

  return withCursor(shows, results);
};
