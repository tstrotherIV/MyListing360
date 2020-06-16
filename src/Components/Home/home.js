import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

const HomePage = () => {
  return (
    <>
      <section className="homebkgd BGDimg ">
        <section className="AccessSect ">
          <section className="CreateAccSect ">
            <div className="createAccBtn">Don't have an account?</div>
            <div className="createAccHyperlink space4px">Create Account</div>
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
