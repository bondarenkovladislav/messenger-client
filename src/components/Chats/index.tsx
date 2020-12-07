import React, { useEffect } from "react";
import { ChatsRoot } from "./styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import PeopleOutline from "@material-ui/icons/PeopleOutline";
import { Chat } from "../Chat";
import { connect } from "react-redux";
import { loadChats, selectRoom } from "../../service/chats";
import { loadMessages } from "../../service/messages";

interface IProps {
  collection?: any[];
  selected?: any;
  me?: any;
  searchValue: string;
}

const Chats = ({ collection, selected, me, searchValue }: IProps) => {
  const filteredCollection = searchValue
    ? collection?.filter((el) => el.name.includes(searchValue))
    : collection;

  useEffect(() => {
    if (me._id) {
      loadChats();
    }
  }, [me]);

  const onRoomClick = (event: any, room: any) => {
    selectRoom(room);
    loadMessages(room._id);
  };

  if (!filteredCollection || filteredCollection.length === 0) {
    return (
      <ChatsRoot>
        <PeopleOutline className="noResults" />
      </ChatsRoot>
    );
  }

  return (
    <ChatsRoot>
      <div className="items">
        <List component="nav" className={"chatsList"}>
          {filteredCollection.map((chat) => (
            <ListItem
              key={chat.name}
              button
              onClick={(event) => onRoomClick(event, chat)}
              className={`userItem ${
                selected._id === chat._id ? "__active" : ""
              } ${"chatsListItem"}`}
            >
              <Chat chat={chat} />
            </ListItem>
          ))}
        </List>
      </div>
    </ChatsRoot>
  );
};

function mapStateToProps(state: any) {
  return {
    collection: state.room.collection,
    selected: state.room.selected,
    me: state.user.me,
  };
}

export default connect(mapStateToProps)(Chats);
