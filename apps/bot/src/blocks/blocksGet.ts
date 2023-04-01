import { notion } from '../notion/notion';

export const blocksGet = async (id: string): Promise<any> => {
  const block = (await notion.blocks.retrieve({
    block_id: id,
  })) as any;

  return block;
};
