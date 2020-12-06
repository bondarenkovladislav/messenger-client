import React, { useEffect } from "react";
import Moment from "react-moment";
import { calendarStringsMessage } from "../../helpers/time";
import { MessageStatus } from "../MessageStatus";
import { Avatar } from "@material-ui/core";
import { MessageRoot } from "./styles";
import { connect } from "react-redux";

interface IProps {
  message: any;
  selected?: any;
}

const Message = ({ message, selected }: IProps) => {
  useEffect(() => {
    // readMessage(message);
  }, []);

  if (!selected) {
    return <></>;
  }

  if (message.isFirst) {
    return (
      <MessageRoot className={"message"}>
        <Avatar src={selected.avatarUrl} className={`user avatar`} />

        <div className="details">
          <div className="text">{message.content}</div>
          <div className="status">
            <Moment calendar={calendarStringsMessage} date={message.date} />
            <MessageStatus message={message} />
          </div>
        </div>
      </MessageRoot>
    );
  }

  return (
    <MessageRoot className={`message __noAvatar`}>
      <div className="details">
        <div className="text">{message.content}</div>
        <div className="status">
          <Moment calendar={calendarStringsMessage} date={message.date} />

          <MessageStatus message={message} />
        </div>
      </div>
    </MessageRoot>
  );
};

function mapStateToProps(state: any) {
  return {
    selected: state.room.selected,
  };
}

export default connect(mapStateToProps)(Message);
