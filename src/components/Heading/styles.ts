import styled from "styled-components";

export const Header = styled.div`
  padding: 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 49px;

  .search {
    flex: 1;
    position: relative;
  }

  .clearIcon {
    position: absolute;
    color: #aaa;
    right: 10px;
    top: 9px;
    font-size: 17px;
    cursor: pointer;
    &:hover {
      color: #888;
    }
  }

  .searchIcon {
    position: absolute;
    color: #aaa;
    left: 10px;
    top: 9px;
    font-size: 17px;
  }

  .searchInput {
    background: #fff;
    padding: 8px;
    border: 1px solid #eee;
    width: 100%;
    border-radius: 5px;
    font-size: 14px;
    color: #666;
    padding-left: 33px;

    &::placeholder {
      color: #aaa;
    }
  }
`;
