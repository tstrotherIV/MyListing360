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
    });
  };

  useEffect(() => {
    getTourImages();
  }, []);

  return (
    <div>
      <h2 className="tourNameHeader">Tour Name</h2>
      <section className="vrImageViewer">
        <a-scene class="aframebox" embedded>
          <a-sky src={newImage}></a-sky>
        </a-scene>
      </section>
      <section className="tourImageLinks">
        {images.map((image) => (
          <button
            key={image.id}
            id={image.id}
            value={image.url}
            onClick={handleFieldChange}
          >
            Image
          </button>
        ))}
      </section>
    </div>
  );
};

export default TourViewer;
