import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// The DOM node to observe
const observableTarget = document.body;

// Callback function when changes occurs
function mutationCallback(mutations, observer) {
  let rootElement = null;

  for (let mutation of mutations) {
    if (rootElement || mutation.type !== "childList") {
      break;
    }

    for (let node of mutation.addedNodes) {
      rootElement = searchReactAnchor(node);
      if (rootElement) {
        break;
      }
    }
  }

  if (rootElement) {
    renderReactApp(rootElement);
  }
}

function searchReactAnchor(node) {
  if (node.id === "root") {
    return node;
  }

  let returnNode = null;
  for (const child of node.childNodes) {
    returnNode = searchReactAnchor(child);
    if (returnNode) {
      break;
    }
  }

  return returnNode;
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
