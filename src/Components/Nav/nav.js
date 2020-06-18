import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./nav.css";

const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };

  const toursWithUserId = () => {
    props.history.push(`/tours/${props.userId}`);
  };

  return (
    <>
      <section className="userIdName">
        Hey {sessionStorage.getItem("loggedUserName")}
      </section>
      <nav className="contentRight">
        {props.hasUser ? (
          <ul className="container">
            <NavLink className="navbarLogo" to="/">
              {" "}
              <img
                className="logoImg"
                src="https://res.cloudinary.com/duo4xxmj8/image/upload/v1591990304/Site360%20Static%20Images/navbarLogo_rspfdq.png"
                width="200"
                alt="new"
              />
            </NavLink>

            <li>
              <span className="nav-link" onClick={toursWithUserId}>
                {" "}
                MyTours{" "}
              </span>
            </li>
            {/* <li>
              <NavLink className="nav-link" to="/account">
                {" "}
                Account{" "}
              </NavLink>
            </li> */}
            <li>
              <span className="nav-link" onClick={handleLogout}>
                {" "}
                Logout{" "}
              </span>
            </li>
          </ul>
        ) : null}
      </nav>
    </>
  );
};

export default withRouter(NavBar);
