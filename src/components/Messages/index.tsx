import React, { useEffect } from "react";
import { connect } from "react-redux";
import { MessagesRoot } from "./styles";
import MessagesHeading from "../MessagesHeading";
import { MessageMy } from "../MessageMy";
import { Write } from "../Write";
import Message from "../Message";

interface IProps {
  collection: any[];
  selected: any;
  me: any;
}

const Messages = ({ selected, collection, me }: IProps) => {
  useEffect(() => {
    if (selected?._id) {
      document?.getElementById("messagesFooter")?.scrollIntoView(false);
    }
  });

  if (selected?._id) {
    return (
      <MessagesRoot id="talk">
        <MessagesHeading />
        <div id="messages">
          {collection.map((message) => {
            if (message.authorId === me._id) {
              return <MessageMy message={message} key={message._id} />;
            }
            return <Message message={message} key={message._id} />;
          })}

          <div id="messagesFooter" />
        </div>
        <Write />
      </MessagesRoot>
    );
  }

  return <></>;
};

function mapStateToProps(state: any) {
  return {
    collection: state.message.collection,
    selected: state.room.selected,
    me: state.user.me,
    text: state.message.text,
  };
}

export default connect(mapStateToProps)(Messages);
