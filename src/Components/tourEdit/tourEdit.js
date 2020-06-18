import React, { useState, useEffect } from "react";
import DataManager from "../../modules/DataManager";
import "./tourEdit.css";

const EditTour = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [photoAlbum, setphotoAlbum] = useState({
    title: "",
    description: "",
    userId: props.userId,
  });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...photoAlbum };
    stateToChange[evt.target.id] = evt.target.value;
    setphotoAlbum(stateToChange);
  };

  const updateTour = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedTour = {
      id: props.match.params.tourId,
      title: photoAlbum.title,
      description: photoAlbum.description,
      userId: props.userId,
    };

    DataManager.update("photoAlbums", editedTour).then(() =>
      props.history.push(`/tours/${props.userId}`)
    );
  };

  useEffect(() => {
    DataManager.get(props.match.params.tourId, "photoAlbums", "").then(
      (photoAlbum) => {
        setphotoAlbum(photoAlbum);
        setIsLoading(false);
      }
    );
  }, [props.match.params.tourId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={photoAlbum.title}
            />
            <label htmlFor="name">Tour Name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="description"
              value={photoAlbum.description}
            />
            <label htmlFor="Description">Description</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              // disabled={isLoading}
              onClick={updateTour}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EditTour;
