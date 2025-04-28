import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./app/store";
import "./index.scss";

import AOS from "aos";

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root") as any);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
