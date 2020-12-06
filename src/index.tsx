import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/index";
// import { AppContainer } from "react-hot-loader";

const render = (Component: any) => {
  ReactDOM.render(
    // <AppContainer>
    <Provider store={store}>
      <Component />
    </Provider>,
    // </AppContainer>,
    document.getElementById("root")
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

render(App);

// // @ts-ignore
// if (module.hot) {
//   // @ts-ignore
//   module.hot.accept("./App", () => {
//     const newApp = require("./App").default;
//     render(newApp);
//   });
// }
