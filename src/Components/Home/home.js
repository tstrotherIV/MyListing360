import React from "react";
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
            <button type="button">Sign In</button>
          </section>
        </section>
      </section>
    </>
  );
};

export default HomePage;
