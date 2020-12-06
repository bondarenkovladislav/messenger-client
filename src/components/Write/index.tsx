import React, { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import AttachFile from "@material-ui/icons/AttachFile";
import { Face, Send } from "@material-ui/icons";
import { Paper } from "@material-ui/core";
import { Picker } from "emoji-mart";
import Textarea from "react-textarea-autosize";
import { IconButtonWrapper, EmojiContainer } from "./styles";
import { sendMessage } from "../../service/messages";

interface IProps {}

export const Write = ({}: IProps) => {
  const [emojiOpened, setEmojiOpened] = useState(false);
  const [text, setText] = useState("");

  const showEmoji = () => {
    setEmojiOpened(!emojiOpened);
  };

  const hideEmoji = () => {
    setEmojiOpened(false);
  };

  const send = () => {
    sendMessage(text);
    setText("");
  };

  const emojiClick = (emoji: any) => {
    // const { text } = this.props;
    // editText(text + emoji.native);
    setText(text + emoji.native);
  };

  const onKeyPress = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage(text);
      setText("");
    }
  };

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div id="messageWrite">
      <div className="messageContainer">
        <ClickAwayListener onClickAway={hideEmoji}>
          <div>
            <IconButtonWrapper>
              <IconButton
                id="buttonEmoji"
                color="default"
                // className={classes.button}
                onClick={() => showEmoji()}
                component="span"
              >
                <Face />
              </IconButton>
            </IconButtonWrapper>
            {emojiOpened ? (
              <EmojiContainer id="emojis">
                <Picker onClick={emojiClick} />
              </EmojiContainer>
            ) : null}
          </div>
        </ClickAwayListener>
        <IconButtonWrapper>
          <IconButton id="buttonUpload" color="default" component="span">
            <AttachFile />
          </IconButton>
        </IconButtonWrapper>
        <IconButtonWrapper>
          <IconButton
            id="buttonSend"
            color="default"
            component="span"
            onClick={send}
          >
            <Send />
          </IconButton>
        </IconButtonWrapper>
        <Textarea
          value={text}
          placeholder="Write a message..."
          onKeyPress={onKeyPress}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
