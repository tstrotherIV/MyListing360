import React, { useState, useEffect } from "react";
import DataManager from "../../modules/DataManager";
import "./tourEdit.css";

const EditTour = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
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

  const getTourImages = () => {
    return DataManager.getTourImages(props.tourId).then((imagesfromDb) => {
      setImages(imagesfromDb.VRimages);
    });
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

  const deleteImage = (id) => {
    DataManager.delete("VRimages", id).then(() =>
      DataManager.getTourImages(props.tourId).then((imagesfromDb) => {
        setImages(imagesfromDb.VRimages);
      })
    );
  };

  useEffect(() => {
    DataManager.get(props.match.params.tourId, "photoAlbums", "").then(
      (photoAlbum) => {
        setphotoAlbum(photoAlbum);
        setIsLoading(false);
        getTourImages();
      }
    );
  }, []);

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
          <br></br>
          <section>
            {images.map((image) => (
              <section key={image.id} id={image.id} value={image.name}>
                {image.name}{" "}
                <button
                  className="deleteTourBtn gap"
                  onClick={() => {
                    deleteImage(image.id);
                  }}
                >
                  Remove Image
                </button>
                <br></br>
                <img src={image.url} alt="" style={{ width: "300px" }} />
                <br></br>
              </section>
            ))}
          </section>
        </fieldset>
      </form>
    </>
  );
};

export default EditTour;
