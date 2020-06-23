import React, { useState } from "react";
import DataManager from "../../../modules/DataManager";
import "./tourCreator.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const CreatephotoAlbum = (props) => {
  const [photoAlbum, setphotoAlbum] = useState({
    title: "",
    description: "",
    userId: props.userId,
    trash: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...photoAlbum };
    stateToChange[evt.target.id] = evt.target.value;
    setphotoAlbum(stateToChange);
  };

  const constructNewphotoAlbum = (evt) => {
    evt.preventDefault();
    if (photoAlbum.title === "" || photoAlbum.description === "") {
      window.alert("Please fill at the fields before moving forward");
    } else {
      setIsLoading(true);
      DataManager.post(photoAlbum).then((newTourFromDb) =>
        props.history.push(`/imageUpload/${newTourFromDb.id}`)
      );
    }
  };
  return (
    <Form>
      <fieldset className="createTourFrom center">
        <section className="createTourHead ">
          <h4>Step 1... Please Fill in the fields below</h4>
        </section>
        <div className="createTourFormFields">
          <FormGroup>
            <Input
              onChange={handleFieldChange}
              type="text"
              id="title"
              placeholder="Name your Virtual Tour (eg: Listing Address)"
            />
          </FormGroup>

          <FormGroup>
            <Input
              onChange={handleFieldChange}
              type="textarea"
              name="text"
              id="description"
              placeholder="Enter a Description for the Tour (eg: “square footage, number of rooms…”) "
            />
          </FormGroup>
        </div>
        <div className="alignRight">
          <Button
            color="success"
            type="button"
            disabled={isLoading}
            onClick={constructNewphotoAlbum}
          >
            Save and Add 360 Images to your tour!
          </Button>{" "}
        </div>
      </fieldset>
    </Form>
  );
};

export default CreatephotoAlbum;
