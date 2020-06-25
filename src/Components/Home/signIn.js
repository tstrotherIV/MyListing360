import React, { useState, useEffect } from "react";
import { Button, Modal } from "reactstrap";
import Login from "../Auth/login";

const SignInBtn = (props) => {
  const [modal, setModal] = useState(false);

  const { className } = props;

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Sign In
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        centered={true}
        fade={true}
      >
        <section>
          <Login
            handleLogin={props.handleLogin}
            handleFieldChange={props.handleFieldChange}
            setUser={props.setUser}
            {...props}
          />
        </section>
      </Modal>
    </div>
  );
};

export default SignInBtn;
