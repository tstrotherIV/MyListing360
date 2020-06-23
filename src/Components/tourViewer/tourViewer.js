import React, { useState, useEffect } from "react";
import "aframe";
import DataManager from "../../modules/DataManager";
import "./tourViewer.css";

const TourViewer = (props) => {
  const [images, setImages] = useState([]);
  const [newImage, setnewImage] = useState([]);
  const [tourName, settourName] = useState([]);

  const handleFieldChange = (evt) => {
    const stateToChange = evt.target.value;
    setnewImage(stateToChange);
  };

  const getTourImages = () => {
    return DataManager.getTourImages(props.tourId).then((imagesfromDb) => {
      setImages(imagesfromDb.VRimages);
      settourName(imagesfromDb);
      setnewImage(imagesfromDb.VRimages[0].url);
    });
  };

  useEffect(() => {
    getTourImages();
  }, []);

  return (
    <div className="tourViewerSect">
      <h4 className="tourNameHeader move">{tourName.title}</h4>
      <h4 className="tourNameHeader move viewerDescription">
        {" "}
        Tour Description: <h5>{tourName.description}</h5>
      </h4>
      <div className="move">
        <section className="vrImageViewer1 move container">
          <a-scene class="aframebox1" embedded>
            <a-sky src={newImage}></a-sky>
          </a-scene>
          <section className="tourImageLinks1 move topleft">
            {images.map((image) => (
              <button
                key={image.id}
                className="imageBtns"
                id={image.id}
                value={image.url}
                onClick={handleFieldChange}
              >
                {image.name}
              </button>
            ))}
          </section>
        </section>
      </div>
    </div>
  );
};

export default TourViewer;
