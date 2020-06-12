import React, { useState } from "react";
import "./login.css";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    props.setUser(credentials);
    props.history.push("/");
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
            type="email"
            id="email"
            placeholder="Enter Username/Email"
            required=""
            autoFocus=""
          />
          {/* <label htmlFor="inputEmail">Email address</label> */}

          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
            placeholder="Enter Password"
            required=""
          />
          {/* <label htmlFor="inputPassword">Password</label> */}
        </div>
        <button className="signInBtn" type="submit">
          Sign in
        </button>
      </fieldset>
    </form>
  );
};

export default Login;
