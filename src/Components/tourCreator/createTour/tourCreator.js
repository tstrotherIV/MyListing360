import React, { useState } from "react";
import DataManager from "../../../modules/DataManager";
import "./tourCreator.css";

const CreateTour = (props) => {
  const [tour, setTour] = useState({ title: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  // const getTours = () => {
  //   return DataManager.getAll().then((emps) => {
  //     setTour(emps);
  //   });
  // };

  const handleFieldChange = (evt) => {
    const stateToChange = { ...tour };
    stateToChange[evt.target.id] = evt.target.value;
    setTour(stateToChange);
  };

  const constructNewTour = (evt) => {
    evt.preventDefault();
    if (tour.title === "" || tour.description === "") {
      window.alert("Please fill at the fields before moving forward");
    } else {
      setIsLoading(true);
      DataManager.post(tour).then(() => props.history.push("/imageUpload"));
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
          <button type="button" disabled={isLoading} onClick={constructNewTour}>
            Save and Add 360 Images to your tour!
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default CreateTour;
