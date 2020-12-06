import React from "react";
import { IChat } from "../../models/IChat";
import ListItem from "@material-ui/core/ListItem/ListItem";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import Moment from "react-moment";
import { calendarStringsUsers } from "../../helpers/time";
import { Photo } from "../Photo";
import { MessageStatus } from "../MessageStatus";
import store from "../../store";

interface IProps {
  chat: IChat;
}

// const styles = ({
//   icon: {
//     fontSize: 14,
//     margin: 0,
//   },
//   avatar: {
//     margin: 0,
//     width: 60,
//     height: 60,
//   },
// });

export const Chat = ({ chat }: IProps) => {
  const myUserId = store.getState().user.me._id;
  const otherMember = chat.members.find((el) => el._id !== myUserId);
  return (
    <ListItem button className="user" component={Link} to={`/chat/${chat._id}`}>
      <Photo user={otherMember} />
      <div className="status">
        {chat?.lastMessage && <MessageStatus message={chat.lastMessage} />}
        {chat?.lastMessage?.date && (
          <Moment
            calendar={calendarStringsUsers}
            date={chat.lastMessage.date}
          />
        )}
      </div>
      <div className="details">
        <p className="name">{chat.name}</p>
        {chat?.lastMessage?.content && (
          <p className="lastMessage">{chat.lastMessage.content}</p>
        )}
      </div>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        autoHideDuration={1000}
        open={false}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{otherMember.username} online</span>}
      />
    </ListItem>
  );
};
