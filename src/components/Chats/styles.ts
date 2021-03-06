import styled from "styled-components";

export const ChatsRoot = styled.aside`
  height: calc(100% - 49px);

  .chatsList {
    padding: 0;
    margin: 0;
  }

  .chatsListItem {
    padding: 0;
    margin: 0;
  }

  .icon {
    font-size: 14px;
    margin: 0;
  }
  .avatar {
    margin: 0;
    width: 60px;
    height: 60px;
  }

  ,
  .items {
    overflow: scroll;
    height: calc(100%);

    .userItem {
      border-right: 3px solid transparent;
      &:hover {
        border-right: 3px solid #ccc;
        background: rgba(0, 0, 0, 0.08);
      }
      &.__active {
        border-right: 3px solid #ccc;
        background: rgba(0, 0, 0, 0.08);
      }
      .user {
        padding: 10px;

        .avatar {
        }
        .status {
          position: absolute;
          color: #8a8d91;
          right: 10px;
          top: 10px;
          font-size: 11px;

          .checkMark {
            float: left;
            margin-right: 5px;
            margin-top: -1px;
          }
        }

        .details {
          padding-left: 10px;
          overflow: hidden;
          margin-top: 5px;

          .name {
            font-size: 14px;
            font-weight: 600;
            color: #43444f;
            margin: 0;
          }
          .lastMessage {
            font-size: 14px;
            color: #8a8d91;
            width: 1000px;
            margin: 0;
          }
        }
      }
    }
  }
  .noResults {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -45px;
    font-size: 90px;
    color: #8a8d91;
  }
`;
