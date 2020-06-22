import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

const HomePage = () => {
  return (
    <section>
      <section className="homebkgd BGDimg ">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src="https://res.cloudinary.com/duo4xxmj8/video/upload/v1592846190/360Video/VR360_Video_1_wih5ch.mp4" />
        </video>

        <section className="AccessSect ">
          <section className="CreateAccSect ">
            <div className="createAccBtn">Don't have an account?</div>
            <NavLink to={"/createAcct"}>
              <button className="viewTourBtn gap">Create Account</button>
            </NavLink>
          </section>
          <section className="signInBtn ">
            <NavLink to="/login">
              <button type="button">Sign In</button>
            </NavLink>
          </section>
        </section>
      </section>
    </section>
  );
};

export default HomePage;
