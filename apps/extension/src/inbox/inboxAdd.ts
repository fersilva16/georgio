import { config } from '../config';
import { notion } from '../notion';

type InboxAddArgs = {
  title: string;
  url: string;
};

export const inboxAdd = async ({ title, url }: InboxAddArgs) => {
  await notion.pages.create({
    parent: {
      database_id: config.NOTION_INBOX_DATABASE,
    },
    properties: {
      Name: {
        type: 'title',
        title: [{ text: { content: title } }],
      },
      URL: {
        type: 'url',
        url,
      },
    },
  });
};
