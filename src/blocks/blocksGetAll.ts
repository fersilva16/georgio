import { blocksQuery } from './blocksQuery';
import { cursorProcessing } from '../cursor/cursorProcessing';
import type { QueryFunctionOptions } from '../cursor/QueryFunction';

export const blocksGetAll = (
  id: string,
  options?: QueryFunctionOptions,
): Promise<any[]> => {
  return cursorProcessing(blocksQuery(id), (block) => block, options);
};
