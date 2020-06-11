import { Route } from "react-router-dom";
import React from "react";
import Home from "./Home/Home";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home setUser={setUser} {...props} />;
        }}
      />
    </>
  );
};

export default ApplicationViews;
