import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import DataManager from "../../../modules/DataManager";

const ImagesCard = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    DataManager.getTourImages(props.tourId).then((tourInfo) => {
      setImages(tourInfo.VRimages);
    });
  }, [props.tourId]);

  return (
    <section>
      {images.map((image) => (
        <Button
          color="info"
          key={image.id}
          className="imageBtns"
          id={image.id}
          value={image.url}
          onClick={props.handleFieldChange}
        >
          {image.name}
        </Button>
      ))}
    </section>
  );
};

export default ImagesCard;
