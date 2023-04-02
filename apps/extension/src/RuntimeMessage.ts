export type SavePageRuntimeMessage = {
  target: 'content';
  data: {
    type: 'savePage';
  };
};

export type InboxAddRuntimeMessage = {
  target: 'background';
  data: {
    type: 'inboxAdd';
    title: string;
    url: string;
  };
};

export type RuntimeMessage = SavePageRuntimeMessage | InboxAddRuntimeMessage;
