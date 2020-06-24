import React, { useState, useEffect } from "react";
import "./Site360.css";
import NavBar from "./Nav/nav";
import ApplicationViews from "./ApplicationViews";
import ReactGa from "react-ga";

const Site360Home = (props) => {
  const isAuthenticated = () => sessionStorage.getItem("loggedUser") !== null;
  const loggedUserId = sessionStorage.getItem("loggedUser");

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = (user) => {
    sessionStorage.setItem("loggedUserId", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  };

  useEffect(() => {
    ReactGa.initialize("UA-170629224-1");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

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
