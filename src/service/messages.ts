import { fetchMessages, createMessage } from "../graphql/messages";
import store from "../store";
import {
  messageCollectionLoadSuccessAction,
  messageSendAction,
} from "../actions/message";

const formatMessages = (messages: any[]) => {
  const myUserId = store.getState().user.me._id;
  const formatted = [];

  for (let i = 0; i < messages.length; i += 1) {
    const m = messages[i];
    const previous = messages[i - 1];
    const next = messages[i + 1];

    m.classes = "";
    m.isFirst = false;
    m.my = myUserId === messages[i].authorId;

    if (i === 0) {
      m.classes += "__initial";
      m.isFirst = true;
    }

    if (previous) {
      if (previous.authorId !== m.authorId) {
        m.isFirst = true;
        m.classes += "__first";
      }
    }
    if (previous && !next) {
      m.classes += "__last";
    }
    if (next) {
      if (next.authorId !== m.authorId) {
        m.classes += "__last";
      }
    }

    formatted.push(m);
  }

  return formatted;
};

export const loadMessages = (chatId: string) => {
  // const url = `${route.URL_ROOM_MESSAGES}/${roomId}.json`;
  fetchMessages(chatId).then((data) => {
    const formatted = formatMessages(data);
    store.dispatch(messageCollectionLoadSuccessAction(chatId, formatted));
  });

  // axios.get(url, httpOptions).then((response) => {
  //   const formatted = formatMessages(response.data);
  //
  //   // Dispatch event
  //   store.dispatch(messageCollectionLoadSuccessAction(roomId, formatted));
  // });
};

const createMessageInstance = (
  text: string,
  myUserId: string,
  chatId: string
) => ({
  mocked: true,
  content: text,
  authorId: myUserId,
  chatId,
  date: new Date().toString(),
  _id: Math.random(),
});

export const sendMessage = (text: string) => {
  const myUserId = store.getState().user.me._id;
  // const { text } = state.message;
  const chatId = store.getState().room.selected._id;
  // const url = `${route.URL_MESSAGE_SEND_USER}/${userId}`;

  if (text.trim().length === 0) {
    return;
  }

  const mock = createMessageInstance(text, myUserId, chatId);

  insertLocalMessages(mock);

  createMessage(mock).then(() => {
    updateMockedMessage(mock);
  });

  // axios
  //   .post(url, { text }, httpOptions)
  //   .then(() => {
  //     updateMockedMessage(mock);
  //   });
};

export const insertLocalMessages = (message: any) => {
  const messages = store.getState().message.collection;

  messages.push(message);

  const formatted = formatMessages(messages);

  // Dispatch event
  store.dispatch(messageSendAction(formatted));
};

export const updateMockedMessage = (mock: any) => {
  let messages = store.getState().message.collection;

  messages = messages.map((message: any) => {
    if (message._id === mock._id) {
      message.mocked = false;
    }

    return message;
  });

  // Dispatch event
  store.dispatch(messageSendAction(messages));
};
