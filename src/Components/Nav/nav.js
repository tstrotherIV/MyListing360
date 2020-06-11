import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };

  return (
    <nav className="contentRight">
      {props.hasUser ? (
        <ul className="container">
          <div className="navbarLogo">Logo Here</div>
          <li>
            <Link className="nav-link" to="/home">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/tours">
              {" "}
              Tours{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/account">
              {" "}
              Account{" "}
            </Link>
          </li>
          <li>
            <span className="nav-link" onClick={handleLogout}>
              {" "}
              Logout{" "}
            </span>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default withRouter(NavBar);
