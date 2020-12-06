export const messageSendAction = (messages: any[]) => ({
  type: "MESSAGE_SEND",
  payload: messages,
});
export const messageEditAction = (roomId: any, text: any) => ({
  type: "MESSAGE_EDIT",
  payload: {
    roomId,
    text,
  },
});
export const messageTextFlushAction = () => ({
  type: "MESSAGE_TEXT_FLUSH",
});
export const messageCollectionLoadSuccessAction = (
  roomId: any,
  messages: any
) => ({
  type: "MESSAGE_COLLECTION_LOAD_SUCCESS",
  payload: {
    roomId,
    messages,
  },
});
