import React, { useState } from "react";
import "./Site360.css";
import NavBar from "./Nav/nav";
import ApplicationViews from "./ApplicationViews";
// import { BrowserRouter } from "react-router-dom";

const Site360Home = (props) => {
  const isAuthenticated = () => sessionStorage.getItem("loggedUser") !== null;
  const loggedUserId = sessionStorage.getItem("loggedUser");
  console.log(loggedUserId);

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = (user) => {
    sessionStorage.setItem("loggedUserId", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  };

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} userId={loggedUserId} />
      <ApplicationViews
        hasUser={hasUser}
        setUser={setUser}
        userId={loggedUserId}
      />
    </>
  );
};

export default Site360Home;
