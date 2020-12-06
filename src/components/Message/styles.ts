import styled from "styled-components";

export const MessageRoot = styled.div`
  margin: 1px 20px;
  color: black;
  display: flex;

  .details {
    margin-left: 10px;
    float: left;
    display: flex;

    .status {
      font-size: 11px;
      color: #8a8d91;
      padding: 5px;
      display: flex;
      margin-left: 5px;

      .checkMark {
        margin-left: 5px;
      }
    }
    .text {
      max-width: 450px;
      font-size: 14px;
      background: #2d7cc1;
      color: #fff;
      padding: 12px 15px;
      border-radius: 15px;
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
    }
  }
  &.__first__last {
    .details {
      .text {
        border-top-left-radius: 2px;
        border-bottom-left-radius: 15px;
      }
    }
  }
  &.__first {
    .details {
      .text {
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
      }
    }
  }
  &.__last {
    .details {
      .text {
        border-top-left-radius: 2px;
        border-bottom-left-radius: 15px;
      }
    }
  }
  &.__noAvatar {
    .details {
      margin-left: 45px;
    }
  }
`;
