import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Routes from "./routes";
// import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Router>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </Router>,

  document.getElementById("root")
);
