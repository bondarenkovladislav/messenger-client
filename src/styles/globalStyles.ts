import styled from "styled-components";

export const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 123;
  background: #fff;
  text-align: center;
`;

export const Spinner = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  margin-left: -50px;
  margin-top: -25px;
`;
