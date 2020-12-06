export const roomSearchAction = (name: any) => ({
  type: "ROOM_SEARCH",
  payload: name,
});
export const roomSelectAction = (room: any) => ({
  type: "ROOM_SELECT",
  payload: room,
});
export const roomCollectionLoadSuccessAction = (
  collection: any,
  selected: any
) => ({
  type: "ROOM_COLLECTION_LOAD_SUCCESS",
  payload: {
    collection,
    selected,
  },
});
export const roomOnlineUpdateAction = (collection: any) => ({
  type: "ROOM_ONLINE_UPDATE",
  payload: collection,
});
