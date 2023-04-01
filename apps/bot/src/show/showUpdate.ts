import { notion } from '../notion/notion';

type ShowCreateArgs = {
  id: string;
  title?: string;
  enriched?: boolean;
  icon?: string;
  cover?: string;
};

export const showUpdate = async ({
  id,
  title,
  enriched,
  icon,
  cover,
}: ShowCreateArgs) => {
  const getTitleArgs = () => {
    if (!title) return {};

    return {
      Title: {
        type: 'title',
        title: [{ text: { content: title } }],
      },
    } as any;
  };

  const getEnrichedArgs = () => {
    if (typeof enriched !== 'boolean') return {};

    return {
      Enriched: {
        type: 'checkbox',
        checkbox: enriched,
      },
    } as any;
  };

  const getIconArgs = () => {
    if (!icon) return {};

    return {
      icon: {
        type: 'external',
        external: {
          url: icon,
        },
      },
    } as any;
  };

  const getCoverArgs = () => {
    if (!cover) return {};

    return {
      cover: {
        type: 'external',
        external: {
          url: cover,
        },
      },
    } as any;
  };

  await notion.pages.update({
    page_id: id,
    properties: {
      ...getTitleArgs(),
      ...getEnrichedArgs(),
    },
    ...getIconArgs(),
    ...getCoverArgs(),
  });
};
