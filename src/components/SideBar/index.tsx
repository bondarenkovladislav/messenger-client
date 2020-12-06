import React, { useState } from "react";
import Chats from "../Chats";
import Heading from "../Heading";
import { SideBarRoot } from "./styles";

export const SideBar = () => {
  // componentDidMount() {
  //   authorizeUser();
  // }
  const [searchValue, setSearchValue] = useState("");

  return (
    <SideBarRoot>
      <Heading searchValue={searchValue} setSearchValue={setSearchValue} />
      <Chats searchValue={searchValue} />
    </SideBarRoot>
  );
};
