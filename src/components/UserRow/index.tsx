import React from "react";
import { UserRowRoot } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { selectRoom, createChat } from "../../service/chats";
import { loadMessages } from "../../service/messages";

interface IProps {
  user: any;
  collection: any[];
  selected: any;
  me: any;
}

const UserRow = ({ user, collection, selected, me }: IProps) => {
  return (
    <MenuItem
      onClick={() => {
        const existingChat = collection.find((el) => el.name === user.name);
        if (existingChat) {
          if (existingChat.name !== selected.name) {
            selectRoom(existingChat);
            loadMessages(existingChat._id);
          }
        } else {
          createChat(me._id, user._id);
        }
      }}
    >
      <UserRowRoot>
        <Avatar src={user.avatarUrl} className={`avatar`} />
        <span>{user.name}</span>
      </UserRowRoot>
    </MenuItem>
  );
};

function mapStateToProps(state: any) {
  return {
    collection: state.room.collection,
    selected: state.room.selected,
    me: state.user.me,
  };
}

export default connect(mapStateToProps)(UserRow);
