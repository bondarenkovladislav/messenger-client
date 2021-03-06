import styled from "styled-components";

export const IconButtonWrapper = styled.div`
  .MuiButtonBase-root {
    margin: 8px;
  }
`;

export const EmojiContainer = styled.div`
  position: absolute;
  top: -365px;
  right: 0;
  box-shadow: none;

  .emoji-mart-bar:last-child {
    display: none;
  }
  .emoji-mart {
    border: 1px solid rgba(0, 0, 0, 0.1);

    .emoji-mart-search {
      .emoji-mart-search-icon {
        top: 8px;
        position: absolute;
        left: 16px;
      }
      input {
        border: 1px solid #eee;
        padding: 6px 5px 6px 30px;
        background: #f1f1f4;
        font-size: 14px;
        color: #666;
      }
    }
  }
`;
