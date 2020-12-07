import { useEffect } from "react";
import { loadChats } from "../service/chats";
import store from "../store";
import { loadMessages } from "../service/messages";
import { fetchUsers } from "../service/user";

export const useWebSocketHandler = (ws: {
  send: any;
  data: any;
  readyState: boolean;
}) => {
  useEffect(() => {
    if (ws.data) {
      const { message } = ws.data;
      switch (message) {
        case "messagesUpdate":
          const selected = store.getState().room.selected;
          if (selected && selected._id) {
            loadMessages(selected._id);
          }
          break;
        case "chatsUpdate":
          loadChats();
          break;
        case "usersUpdate":
          fetchUsers();
          break;
      }
    }
  }, [ws.data]);
};
