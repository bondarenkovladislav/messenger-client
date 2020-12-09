import React, { useEffect } from "react";
import { SideBar } from "../SideBar";
import Messages from "../Messages";
import { connect } from "react-redux";
import authorizeUser from "../../service/user";
import { Loading, Spinner } from "../../styles/globalStyles";
// @ts-ignore
import MoonLoader from "react-spinners/BarLoader";
import useWebSocketLite from "../../hooks/webSocketHook";
import { useWebSocketHandler } from "../../hooks/webSocketHandler";

const Main = ({ me }: any) => {
  // use our hook
  const ws = useWebSocketLite({
    // socketUrl: "ws://localhost:777",
    socketUrl: "wss://hybrid-messanger-server-1622.herokuapp.com/",
  });
  useWebSocketHandler(ws);

  useEffect(() => {
    authorizeUser();
  }, []);
  const isLoading = me?._id === undefined;

  return (
    <div id="layout">
      {isLoading ? (
        <Loading id="loading">
          <Spinner>
            <MoonLoader
              sizeUnit="px"
              size={50}
              height={3}
              color="#2d7cc1"
              loading={isLoading}
            />
          </Spinner>
        </Loading>
      ) : (
        <>
          <SideBar />
          <Messages />
        </>
      )}
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    me: state.user.me,
  };
}

export default connect(mapStateToProps)(Main);
