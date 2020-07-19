import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Site360 from "./Components/Site360";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <Site360 />
  </Router>,
  document.getElementById("root")
);
