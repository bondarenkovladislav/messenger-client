import React from "react";
import { Small, Default } from "./styles";

interface IProps {
  user: any;
  small?: boolean;
}

export const OnlineStatus = ({ user, small }: IProps) => {
  if (user.online) {
    if (small) {
      return <Small />;
    }

    return <Default />;
  }
  return <></>;
};
