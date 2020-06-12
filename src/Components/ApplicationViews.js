import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import HomePage from "./Home/home";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <Router>
      <Route
        path="/"
        render={(props) => {
          return <HomePage setUser={setUser} {...props} />;
        }}
      />
    </Router>
  );
};

export default ApplicationViews;
