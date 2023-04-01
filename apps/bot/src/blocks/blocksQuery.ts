import type { Cursor } from '../cursor/Cursor';
import type { QueryFunctionOptions } from '../cursor/QueryFunction';
import { withCursor } from '../cursor/withCursor';
import { notion } from '../notion/notion';

export const blocksQuery =
  (id: string) =>
  async (options: QueryFunctionOptions = {}): Promise<Cursor<any>> => {
    const blocks = await notion.blocks.children.list({
      block_id: id,
      ...options,
    });

    return withCursor(blocks, blocks.results);
  };
