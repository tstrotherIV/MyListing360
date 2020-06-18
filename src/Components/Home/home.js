import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./home.css";

const HomePage = () => {
  return (
    <>
      <section className="homebkgd BGDimg ">
        <section className="AccessSect ">
          <section className="CreateAccSect ">
            <div className="createAccBtn">Don't have an account?</div>
            <NavLink to={"/createAcct"}>
              <button className="viewTourBtn gap">Create Account</button>
            </NavLink>
          </section>
          <section className="signInBtn">
            <NavLink to="/login">
              <button type="button">Sign In</button>
            </NavLink>
          </section>
        </section>
      </section>
    </>
  );
};

export default HomePage;
