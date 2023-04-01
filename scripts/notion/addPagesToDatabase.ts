import { notion } from '../../apps/bot/src/notion/notion';

(async () => {
  const pages = [
    'Getting real - Basecamp',
    'Art of Scalability, The: Scalable Web Architecture, Processes, and Organizations for the Modern Enterprise',
  ];

  for (const page of pages) {
    await notion.pages.create({
      parent: {
        database_id: 'fba3b82ff79e467487fdb118909724f1',
      },
      properties: {
        Name: {
          type: 'title',
          title: [{ text: { content: page } }],
        },
      },
    });

    // eslint-disable-next-line no-console
    console.log(`Page "${page}" created`);
  }
})();
