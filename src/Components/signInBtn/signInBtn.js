import React, { useState } from "react";
import { Button, Modal } from "reactstrap";
import Login from "../Auth/login";

const SingInBtn = (props) => {
  const [modal, setModal] = useState(false);
  const { className } = props;

  const toggle = () => setModal(!modal);

  return (
    <section>
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
            handleLogin={handleLogin}
            handleFieldChange={handleFieldChange}
            setUser={props.setUser}
            {...props}
          />
        </section>
      </Modal>
    </section>
  );
};

export default SingInBtn;
