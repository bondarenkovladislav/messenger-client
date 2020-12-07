import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Login } from "./components/Login";
import Main from "./components/Main";
import Register from "./components/Register";

import useWebSocketLite from "./hooks/webSocketHook";
import { useWebSocketHandler } from "./hooks/webSocketHandler";
function App() {
  // use our hook
  const ws = useWebSocketLite({
    // socketUrl: "ws://localhost:777",
    socketUrl: "ws://hybrid-messanger-server-1622.herokuapp.com/",
  });
  useWebSocketHandler(ws);

  return (
    <>
      <CssBaseline />
      <Router>
        <Route path={"/login"} exact component={Login} />
        <Route path={"/register"} exact component={Register} />
        <Route path={"/"} exact component={Main} />
        <Route path={"/chat/:id?"} exact component={Main} />
      </Router>
    </>
  );
}

export default App;
