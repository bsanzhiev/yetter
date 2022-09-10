import React from "react";
//import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { getContext, resetContext } from "kea";
import { App } from "./App";

resetContext({
  createStore: {},
  plugins: [],
});

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Provider store={getContext().store}>
    <App />
  </Provider>
);

/* ReactDOM.render(
    <Provider store={getContext().store}>
        <App />
    </Provider>,
    document.getElementById('root')
) */
