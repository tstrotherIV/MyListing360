import React, { useState, useEffect } from "react";
import "aframe";
import DataManager from "../../modules/DataManager";
import "./tourViewer.css";

const TourViewer = (props) => {
  const [images, setImages] = useState([]);

  const getTour = () => {
    return DataManager.getTourImages(props.tourId).then((imagesfromDb) => {
      setImages(imagesfromDb);
    });
  };

  useEffect(() => {
    getTour();
  }, []);

  return (
    <div>
      <h2 className="tourNameHeader">Tour Name</h2>
      <section className="vrImageViewer">
        <a-scene class="aframebox" embedded>
          <a-sky src="https://res.cloudinary.com/duo4xxmj8/image/upload/v1592420440/360imgFolder/img2_trupbj.jpg"></a-sky>
        </a-scene>
      </section>
      <section className="tourImageLinks">
        {images.VRimages.map((image) => (
          <button>Image: {image.url}</button>
        ))}
      </section>
    </div>
  );
};

export default TourViewer;
