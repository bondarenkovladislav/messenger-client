import React from "react";
import { calendarStringsMessage } from "../../helpers/time";
import Moment from "react-moment";
import { MessageStatus } from "../MessageStatus";
import { MessageMyRoot } from "./styles";

interface IProps {
  message: any;
}

export const MessageMy = ({ message }: IProps) => {
  return (
    <MessageMyRoot className={`messageMy ${message.classes}`}>
      <div className="details">
        <div className="status">
          <MessageStatus message={message} />

          <Moment calendar={calendarStringsMessage} date={message.date} />
        </div>
        <div className="text">{message.content}</div>
      </div>
    </MessageMyRoot>
  );
};
