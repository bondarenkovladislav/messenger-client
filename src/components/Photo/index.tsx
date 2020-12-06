import React from "react";
import { ProfilePhoto } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import { OnlineStatus } from "../OnlineStatus";

interface IProps {
  user: any;
}

export const Photo = ({ user }: IProps) => {
  return (
    <ProfilePhoto>
      <Avatar src={user.avatarUrl} className={`avatar`} />
      <OnlineStatus user={user} />
    </ProfilePhoto>
  );
};
