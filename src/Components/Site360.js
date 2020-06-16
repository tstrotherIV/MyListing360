import React, { useState } from "react";
import "./Site360.css";
import NavBar from "./Nav/nav";
import ApplicationViews from "./ApplicationViews";
// import { BrowserRouter } from "react-router-dom";

const Site360Home = (props) => {
  const isAuthenticated = () => sessionStorage.getItem("loggedUser") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = (user) => {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  };

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Site360Home;
