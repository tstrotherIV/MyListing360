import React, { useState } from "react";
import { withRouter } from "react-router-dom";
// import "./nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };

  const toursWithUserId = () => {
    props.history.push(`/tours/${props.userId}`);
  };
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {props.hasUser ? (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img
              className="logoImg"
              src="https://res.cloudinary.com/duo4xxmj8/image/upload/v1591990304/Site360%20Static%20Images/navbarLogo_rspfdq.png"
              width="200"
              alt="new"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <span className="nav-link" onClick={toursWithUserId}>
                  {" "}
                  MyTours{" "}
                </span>
              </NavItem>
              <NavItem>
                <span className="nav-link" onClick={handleLogout}>
                  {" "}
                  Logout{" "}
                </span>
              </NavItem>
            </Nav>
            <NavbarText>
              <section className="userIdName">
                Hey {sessionStorage.getItem("loggedUserName")}
              </section>
            </NavbarText>
          </Collapse>
        </Navbar>
      ) : null}
    </div>
  );
};

export default withRouter(NavBar);
