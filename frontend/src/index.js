import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

if (process.env === "production") {
  Sentry.init({
    dsn: process.env.SENTRY_CLIENT_DSN,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
