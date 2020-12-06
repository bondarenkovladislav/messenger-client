import { apiCall } from "./api";

const messagesFetchQuery = (chatId: string) => `
      query {
        getMessages(chatId: "${chatId}") {
          _id content chatId authorId date
        }
      }
    `;

export const fetchMessages = async (chatId: string) =>
  apiCall(messagesFetchQuery(chatId)).then((res: any) => res.data.getMessages);

const messageCreateQuery = (message: any) => `
     mutation {
        createMessage(message: {content: "${message.content}", chatId: "${message.chatId}", authorId: "${message.authorId}", date: "${message.date}" })
     }
`;

export const createMessage = async (message: any) =>
  apiCall(messageCreateQuery(message));
