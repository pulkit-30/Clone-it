import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
ReactDOM.render(
  <div>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </div>,
  document.getElementById("root")
);
