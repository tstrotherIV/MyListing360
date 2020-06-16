import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./Components/App";
import Site360 from "./Components/Site360";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Site360 />
  </Router>,
  document.getElementById("root")
);
