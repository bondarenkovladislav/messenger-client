import { apiCall } from "./api";

export const chatsFetchQuery = (userId: string) => `
      query {
        getChats(userId: "${userId}") {
          _id members {
            name avatarUrl _id
          } lastMessage {
            _id content chatId authorId date
          }
        }
      }
    `;

export const fetchChats = async (userId: string) =>
  apiCall(chatsFetchQuery(userId)).then((res: any) => res.data.getChats);

const chatCreateQuery = (members: [string, string]) => `
     mutation {
        createChat(chat: {members: ["${members[0]}", "${members[1]}"]})
     }
`;

export const createChatApi = async (
  currentUserId: string,
  targetUserId: string
) =>
  apiCall(chatCreateQuery([currentUserId, targetUserId])).then(
    (res: any) => res.data.createChat
  );
