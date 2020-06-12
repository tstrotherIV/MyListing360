import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import HomePage from "./Home/home";
import Login from "./Auth/login";
import UserTours from "./UserTours/userTours";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <Router>
      <Route
        exact
        path="/"
        render={(props) => {
          return <HomePage setUser={setUser} {...props} />;
        }}
      />
      <Route
        path="/login"
        render={(props) => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
      <Route
        path="/tours"
        render={(props) => {
          return <UserTours setUser={setUser} {...props} />;
        }}
      />
    </Router>
  );
};

export default ApplicationViews;
