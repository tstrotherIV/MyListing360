import React from "react";
// import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./nav.css";

const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };

  return (
    <>
      <section className="userIdName">Hey, Tom Strother</section>
      <Router>
        <nav className="contentRight">
          {props.hasUser ? (
            <ul className="container">
              <div className="navbarLogo">
                <img
                  className="logoImg"
                  src="https://res.cloudinary.com/duo4xxmj8/image/upload/v1591990304/Site360%20Static%20Images/navbarLogo_rspfdq.png"
                  width="200"
                  height="auto"
                  alt="new"
                />
              </div>
              {/* <li>
              <Link className="nav-link" to="/">
                {" "}
                Home{" "}
              </Link>
            </li> */}
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
      </Router>
    </>
  );
};

export default NavBar;
