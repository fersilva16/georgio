import { Client } from '@notionhq/client';

import { config } from '../config';

export const notion = new Client({
  auth: config.NOTION_AUTH,
});
