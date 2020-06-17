import React, { useState, useEffect } from "react";
import "aframe";
import "./tourViewer.css";

const TourViewer = () => {
  const [image, setImage] = useState({ url: "" });

  const handleFieldChange = (evt) => {
    const stateToChange = evt.target.value;
    setImage(stateToChange);
  };

  const initialLoad = () => {
    setImage(
      "https://res.cloudinary.com/duo4xxmj8/image/upload/v1592317375/360imgFolder/euxhndw9l3immbncddom.jpg"
    );
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return (
    <div>
      <h2 className="tourNameHeader">Tour Name</h2>
      <section className="vrImageViewer">
        <a-scene class="aframebox" embedded>
          <a-sky src={image}></a-sky>
        </a-scene>
      </section>
      <section className="tourImageLinks">
        <button
          className="360Image"
          onClick={handleFieldChange}
          value="https://res.cloudinary.com/duo4xxmj8/image/upload/v1592317375/360imgFolder/euxhndw9l3immbncddom.jpg"
        >
          Image 1
        </button>
        <button
          className="360Image"
          onClick={handleFieldChange}
          value="https://res.cloudinary.com/duo4xxmj8/image/upload/v1592416156/360imgFolder/beach_gba7dm.jpg"
        >
          Image 2
        </button>
        <button
          className="360Image"
          onClick={handleFieldChange}
          value="https://res.cloudinary.com/duo4xxmj8/image/upload/v1592420440/360imgFolder/img2_trupbj.jpg"
        >
          Image 3
        </button>
      </section>
    </div>
  );
};

export default TourViewer;
