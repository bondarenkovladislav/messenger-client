import React from "react";
import { ProfilePhoto } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import { OnlineStatus } from "../OnlineStatus";

interface IProps {
  user: any;
}

export const PhotoSmall = ({ user }: IProps) => {
  const viewProfile = () => {
    // window.open(
    //   `${route.URL_PROFILE}/${user.id}`,
    //   '_blank',
    // );
  };

  return (
    <ProfilePhoto>
      <Avatar
        src={user.avatarUrl}
        onClick={viewProfile}
        // styles={{ margin: 0, width: 35, height: 35 }}
        className={`user`}
      />
      <OnlineStatus user={user} small />
    </ProfilePhoto>
  );
};
