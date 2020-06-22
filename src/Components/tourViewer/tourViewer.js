import React, { useState, useEffect } from "react";
import "aframe";
import DataManager from "../../modules/DataManager";
import "./tourViewer.css";

const TourViewer = (props) => {
  const [images, setImages] = useState([]);
  const [newImage, setnewImage] = useState([]);

  const handleFieldChange = (evt) => {
    const stateToChange = evt.target.value;
    setnewImage(stateToChange);
  };

  const getTourImages = () => {
    return DataManager.getTourImages(props.tourId).then((imagesfromDb) => {
      setImages(imagesfromDb.VRimages);
      setnewImage(imagesfromDb.VRimages[0].url);
    });
  };

  useEffect(() => {
    getTourImages();
  }, []);

  return (
    <div className="tourViewerSect">
      <h2 className="tourNameHeader move">Tour Name</h2>
      <section className="vrImageViewer move">
        <a-scene class="aframebox1" embedded>
          <a-sky src={newImage}></a-sky>
        </a-scene>
      </section>
      <section className="tourImageLinks1 move">
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
    </div>
  );
};

export default TourViewer;
