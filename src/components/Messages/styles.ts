import styled from "styled-components";

export const MessagesRoot = styled.section`
  width: calc(100vw - 350px);
  background: #fff;
  position: relative;

  .heading {
    background: #fff;
    padding: 7px 10px 7px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    position: fixed;
    z-index: 1;
    top: 0;
    height: 50px;
    width: calc(100% - 351px);
    cursor: default;

    .user {
      cursor: pointer;
    }
    .name {
      flex: 2;
      font-size: 14px;
      margin-left: 10px;
      margin-top: 3px;
      font-weight: 600;
      color: #43444f;

      .activeAt {
        font-size: 12px;
        font-weight: 500;
        margin-top: 1px;
        color: #8a8d91;
      }
    }
    #phone {
      margin-right: 10px;
    }
    #textSearch {
      margin-right: 0;
    }
    #profileInfo {
      margin-left: 10px;
    }
  }

  #messages {
    background: #fff;
    padding-top: 65px;
    height: calc(100vh - 110px);
    position: relative;
    overflow: scroll;
  }

  #messageWrite {
    background: #fff;
    padding: 15px;
    position: fixed;
    bottom: 0;
    right: 0;
    width: calc(100% - 351px);

    .messageContainer {
      margin: 0 10px 10px 49px;
      position: relative;

      textarea {
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-radius: 3px;
        background: #f1f1f4;
        resize: none;
        line-height: 24px;
        overflow: auto;
        height: auto;
        font-size: 16px;
        padding: 20px;
      }
      #buttonEmoji {
        position: absolute;
        top: 1px;
        right: 105px;
        z-index: 1;
      }
      #buttonUpload {
        position: absolute;
        top: 1px;
        right: 55px;
        z-index: 1;
      }
      #buttonSend {
        position: absolute;
        top: 1px;
        right: 0;
        z-index: 1;
      }
    }
  }
`;
