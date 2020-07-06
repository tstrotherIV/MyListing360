import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./home.css";
import { Button } from "reactstrap";
// import Login from "../Auth/login";
import DataManager from "../../modules/DataManager";
import SignInBtn from "../Home/signIn";

const HomePage = (props) => {
  const [signIn, setSignIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === "" || credentials.password === "") {
      window.alert("Please enter your Login Information below");
    } else {
      DataManager.getUser(credentials.username).then((user) => {
        if (user.length < 1) {
          window.alert("User Account doesn't exist, Please Create an account");
        } else if (
          user[0].username === credentials.username ||
          user[0].password === credentials.password
        ) {
          sessionStorage.setItem("loggedUser", user[0].id);
          sessionStorage.setItem("loggedUserName", user[0].firstName);
          let loggedUser = sessionStorage.getItem(`loggedUser`);
          props.setUser(loggedUser);

          props.history.push(`/tours/${loggedUser}`);
        }
      });
    }
  };

  const checkForUser = () => {
    let item = props.hasUser;
    if (item === false) {
      setSignIn(
        <SignInBtn
          handleFieldChange={handleFieldChange}
          handleLogin={handleLogin}
          {...props}
        />
      );
    }
  };

  useEffect(() => {
    checkForUser();
  }, [props.hasUser]);

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
          <source src="" />
        </video>

        <section className="AccessSect ">
          <section className="CreateAccSect ">
            <div className="createAccBtn">Don't have an account?</div>
            <NavLink to={"/createAcct"}>
              <Button color="info" className="viewTourBtn gap">
                Create Account
              </Button>
            </NavLink>
          </section>
          <section className="signInBtn"> {signIn}</section>
        </section>
      </section>
    </section>
  );
};

export default HomePage;
