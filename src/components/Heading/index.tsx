import React, { useState, useEffect } from "react";
import Search from "@material-ui/icons/Search";
import Close from "@material-ui/icons/Close";
import { Header } from "./styles";
import AddIcon from "@material-ui/icons/Add";
import Menu from "@material-ui/core/Menu";
import { fetchUsers } from "../../service/user";
import { connect } from "react-redux";
import UserRow from "../UserRow";

interface IProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  allUsers: any[];
}

const Heading = ({ searchValue, setSearchValue, allUsers }: IProps) => {
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const showMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Header>
      <div className="search">
        <Search className="searchIcon" />
        <input
          className="searchInput"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search by name"
        />
        {searchValue && searchValue.length > 0 ? (
          <Close className="clearIcon" onClick={() => setSearchValue("")} />
        ) : (
          <>
            <AddIcon className="clearIcon" onClick={showMenu} />
            <Menu
              id="chatsMenu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
            >
              {allUsers.map((user) => (
                <div key={user._id}>
                  <UserRow user={user} />
                </div>
              ))}
            </Menu>
          </>
        )}
      </div>
    </Header>
  );
};
function mapStateToProps(state: any) {
  return {
    allUsers: state.user.allUsers,
  };
}

export default connect(mapStateToProps)(Heading);
