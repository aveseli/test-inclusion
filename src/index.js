import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// The DOM node to observe
const observableTarget = document.body;

// Callback function when changes occurs
function mutationCallback(mutations, observer) {
  console.log("mutation record", mutations);

  // TODO iterate mutations and node list and search for the react root node!
  // when found, do the rendering.
  const rootElem = document.getElementById("root");
  if (rootElem) {
    renderReactApp(rootElem);
  }
}

// Create a new instance of MutationObserver with callback in params
const observer = new MutationObserver(mutationCallback);

// Setup config
const config = {
  childList: true,
  subtree: true,
};

// When everything is ready, we just observe our target
observer.observe(observableTarget, config);

function renderReactApp(elem) {
  const rootElem = document.getElementById("root");

  if (rootElem) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      elem
    );
  }
}

window.renderReactApp = renderReactApp;

// renderReactApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
