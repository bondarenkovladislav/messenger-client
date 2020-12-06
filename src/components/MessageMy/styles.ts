import styled from "styled-components";

export const MessageMyRoot = styled.div`
  margin: 1px 25px;
  font-size: 14px;
  color: black;
  display: flex;
  flex-direction: row-reverse;

  .details {
    float: right;
    display: flex;
    .text {
      max-width: 450px;
      background: #f1f1f4;
      color: #2b2c33;
      font-size: 14px;
      padding: 12px 15px;
      border-radius: 15px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
    .status {
      font-size: 11px;
      color: #8a8d91;
      padding: 5px;
      display: flex;
      margin-right: 5px;

      .checkMark {
        margin-right: 5px;
      }
    }
  }

  &.__first__last {
    margin-top: 10px;
    .details {
      .text {
        border-top-right-radius: 2px;
        border-bottom-right-radius: 15px;
      }
    }
  }
  &.__first {
    margin-top: 10px;
    .details {
      .text {
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
      }
    }
  }
  &.__last {
    .details {
      .text {
        border-top-right-radius: 2px;
        border-bottom-right-radius: 15px;
      }
    }
  }
  .icon {
    font-size: 14px;
    margin: 0;
  }
  
  .avatar {
    margin: 0;
    width: 35px;
    height: 35px
  },
`;
