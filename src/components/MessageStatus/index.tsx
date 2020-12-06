import React from "react";
import DoneAll from "@material-ui/icons/DoneAll";
import Done from "@material-ui/icons/Done";

interface IProps {
  message: any;
}

export const MessageStatus = ({ message }: IProps) => {
  if (message.isReadByAll) {
    return (
      <div className="checkMark">
        <DoneAll style={{ fontSize: "14px", margin: 0 }} />
      </div>
    );
  }

  if (message.mocked) {
    return <></>;
  }

  return (
    <div className="checkMark">
      <Done style={{ fontSize: "14px", margin: 0 }} />
    </div>
  );
};
