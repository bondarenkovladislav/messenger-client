import { fetchChats, createChatApi } from "../graphql/chats";
import store from "../store";
import {
  roomSelectAction,
  roomCollectionLoadSuccessAction,
} from "../actions/room";
import { messageTextFlushAction } from "../actions/message";
import { loadMessages } from "./messages";

const buildChats = (collection: any[]) => {
  const myUserId = store.getState().user.me._id;
  const items: any[] = [];

  collection.forEach((chat) => {
    chat.avatarUrl = chat.members.find(
      (el: any) => el._id !== myUserId
    ).avatarUrl;
    chat.name = chat.members.find((el: any) => el._id !== myUserId).name;

    items.push(chat);
  });

  // return items;

  return items.sort((a, b) => {
    return b?.lastMessage?.date - a?.lastMessage?.date;
  });
};

export const loadChats = () => {
  fetchChats(store.getState().user.me._id).then((data) => {
    const chats = buildChats(data);
    store.dispatch(roomSelectAction(chats[0]));
    if (chats.length) {
      store.dispatch(roomCollectionLoadSuccessAction(chats, chats[0]));
      loadMessages(chats[0]._id); // Load messages for the last selected room
    }
  });

  // axios.get(route.URL_ROOM, httpOptions).then((response) => {
  //   if (response.data.length === 0) {
  //     return;
  //   }
  //
  //   const rooms = buildRooms(response.data);
  //
  //   store.dispatch(roomSelectAction(rooms[0]));
  //   store.dispatch(roomCollectionLoadSuccessAction(rooms, rooms[0]));
  //   loadMessages(rooms[0].id); // Load messages for the last selected room
  // });
};

export const selectRoom = (room: any) => {
  store.dispatch(roomSelectAction(room));
  store.dispatch(messageTextFlushAction());
};

export const createChat = async (
  currentUserId: string,
  targetUserId: string
) => {
  await createChatApi(currentUserId, targetUserId);
  loadChats();
};
