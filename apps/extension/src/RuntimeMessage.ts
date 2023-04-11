export type SavePageRuntimeMessage = {
  target: 'content';
  data: {
    type: 'savePage';
    remove?: boolean;
  };
};

export type InboxAddRuntimeMessage = {
  target: 'background';
  data: {
    type: 'inboxAdd';
    title: string;
    url: string;
    remove?: boolean;
  };
};

export type RuntimeMessage = SavePageRuntimeMessage | InboxAddRuntimeMessage;
