import React, { useState } from "react";
import DataManager from "../../modules/DataManager";
import "./login.css";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  // const [users, setUsers] = useState({ username: "", password: "" });
  // const [isLoading, setIsLoading] = useState(false);

  // Update state whenever an input field is edited
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
          let loggedUser = sessionStorage.getItem(`loggedUser`);
          props.setUser(loggedUser);

          props.history.push(`/tours/${loggedUser}`);
        }
      });
    }
    // else: get credentials from state
    // create fetch to get users from the users database and return the objects
    // compare credentials to returned objects
    // if user with matching info exists take users ID and store it in session storage
  };

  return (
    <form onSubmit={handleLogin}>
      <fieldset className="loginFrom center">
        <section className="loginAccessSect ">
          <section className="loginCreateAccSect ">
            <div className="logincreateAccBtn">Don't have an account?</div>
            <div className="logincreateAccHyperlink space4px">
              Create Account
            </div>
          </section>
        </section>
        <div className="loginformFields">
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

export default Login;
