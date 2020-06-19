import React, { useState } from "react";
import DataManager from "../../../modules/DataManager";
import "./tourCreator.css";

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
    <form>
      <fieldset className="createTourFrom center">
        <section className="createTourHead ">
          <h4>Step 1... Please Fill in the fields below</h4>
        </section>
        <div className="createTourFormFields">
          <input
            onChange={handleFieldChange}
            type="text"
            id="title"
            placeholder="Name your Virtual Tour (eg: Listing Address)"
          />

          <input
            onChange={handleFieldChange}
            type="text"
            id="description"
            placeholder="Enter a Description for the Tour (eg: “square footage, number of rooms…”) "
            required
          />
        </div>
        <div className="alignRight">
          <button
            type="button"
            disabled={isLoading}
            onClick={constructNewphotoAlbum}
          >
            Save and Add 360 Images to your tour!
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default CreatephotoAlbum;
