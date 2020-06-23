import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataManager from "../../modules/DataManager";
import "./login.css";

const CreateAcct = (props) => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleCreateAcct = (e) => {
    e.preventDefault();
    if (
      credentials.firstName === "" ||
      credentials.lastName === "" ||
      credentials.username === "" ||
      credentials.password === ""
    ) {
      window.alert("Please enter your Login Information below");
    } else {
      const newUser = {
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        username: credentials.username,
        password: credentials.password,
      };

      DataManager.createNewUser(newUser).then((userFromDb) => {
        sessionStorage.setItem("loggedUser", userFromDb.id);
        sessionStorage.setItem("loggedUserName", userFromDb.firstName);
        let loggedUser = sessionStorage.getItem(`loggedUser`);
        props.setUser(loggedUser);
        props.history.push(`/tours/${userFromDb.id}`);
      });
    }
  };

  return (
    <form onSubmit={handleCreateAcct}>
      <fieldset className="loginFrom center">
        <h4>Create Account</h4>
        <section className="loginAccessSect ">
          <section className="loginCreateAccSect ">
            <div className="logincreateAccBtn">Already have an account?</div>
            <Link to={"/login"}>
              <button className="viewTourBtn gap">Sign In</button>
            </Link>
          </section>
        </section>
        <div className="loginformFields">
          <input
            onChange={handleFieldChange}
            type="text"
            id="firstName"
            placeholder="Enter Your First Name"
            required=""
            autoFocus=""
          />

          <input
            onChange={handleFieldChange}
            type="text"
            id="lastName"
            placeholder="Enter Your Last Name"
            required=""
            autoFocus=""
          />

          <input
            onChange={handleFieldChange}
            type="text"
            id="username"
            placeholder="Enter Username"
            required=""
            autoFocus=""
          />

          <input
            onChange={handleFieldChange}
            type="text"
            id="password"
            placeholder="Enter Password"
            required=""
          />
        </div>
        <button className="signInBtn" type="submit">
          Sign in
        </button>
      </fieldset>
    </form>
  );
};

export default CreateAcct;
