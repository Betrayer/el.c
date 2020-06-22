import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { env } from "./config";

// ReactDOM.render(<App env={env} />, document.getElementById("root"));
ReactDOM.render(<App env={env} />, document.querySelector("body"));

