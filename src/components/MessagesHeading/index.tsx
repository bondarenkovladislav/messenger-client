import React, { useState } from "react";
import { connect } from "react-redux";
import { calendarStringsHeader } from "../../helpers/time";
import { PhotoSmall } from "../PhotoSmall";
import Moment from "react-moment";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Phone from "@material-ui/icons/Phone";
import Search from "@material-ui/icons/Search";
import Close from "@material-ui/icons/Close";
import MoreVert from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Menu from "@material-ui/core/Menu";
import store from "../../store";
import { Header } from "../Heading/styles";
import { useHistory } from "react-router-dom";

interface IProps {
  selected: any;
  me: any;
}

const MessagesHeading = ({ selected, me }: IProps) => {
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const showMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const logout = () => {
    localStorage.removeItem("authorization");
    history.push("/login");
  };

  const clearSearch = () => {
    setSearch("");
  };

  const onKeyUp = (event: any) => {
    if (event.key === "Escape") {
      clearSearch();
    }
  };

  const changeSearch = (event: any) => {
    setSearch(event.target.value);
  };

  if (!selected.name) {
    return <></>;
  }

  const myUserId = store.getState().user.me._id;

  return (
    <Header className="heading">
      <PhotoSmall
        user={selected?.members.find((el: any) => el._id !== myUserId)}
      />

      <div className="name">
        {selected.name}
        <p className="activeAt">
          {selected?.lastMessage?.date && (
            <Moment
              calendar={calendarStringsHeader}
              date={selected.lastMessage.date}
            />
          )}
        </p>
      </div>

      <IconButton
        id="phone"
        // styles={{ margin: 0, padding: 5 }}
      >
        <Phone />
      </IconButton>

      <div id="textSearch" className="search __dark">
        <Search className="searchIcon" />
        <input
          className="searchInput"
          type="text"
          value={search}
          onKeyUp={onKeyUp}
          onChange={changeSearch}
          placeholder="Search in messages"
        />
        {search.length > 0 ? (
          <Close className="clearIcon" onClick={clearSearch} />
        ) : (
          ""
        )}
      </div>

      <IconButton
        id="profileInfo"
        component="span"
        aria-label="Delete"
        aria-owns={anchorEl ? "profileMenu" : undefined}
        aria-haspopup="true"
        onClick={showMenu}
      >
        <MoreVert />
      </IconButton>

      <Menu
        id="profileMenu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText inset primary="Sign Out" />
        </MenuItem>
      </Menu>
    </Header>
  );
};

function mapStateToProps(state: any) {
  return {
    collection: state.room.collection,
    selected: state.room.selected,
    me: state.user.me,
  };
}

export default connect(mapStateToProps)(MessagesHeading);
