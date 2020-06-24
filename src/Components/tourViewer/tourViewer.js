import React, { useState, useEffect } from "react";
import "aframe";
import DataManager from "../../modules/DataManager";
import "./tourViewer.css";
import { Collapse, Button, CardBody, Card, Container } from "reactstrap";
import ReactGa from "react-ga";

const TourViewer = (props) => {
  const [images, setImages] = useState([]);
  const [newImage, setnewImage] = useState([]);
  const [tourName, settourName] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setcount] = useState([]);

  const toggle = () => setIsOpen(!isOpen);

  const handleFieldChange = (evt) => {
    ReactGa.event({
      category: "Button",
      action: "clicked new image in tour",
    });
    const stateToChange = evt.target.value;
    setnewImage(stateToChange);
  };

  const getTourImages = () => {
    return DataManager.getTourImages(props.tourId).then((imagesfromDb) => {
      setImages(imagesfromDb.VRimages);
      settourName(imagesfromDb);
      setcount(imagesfromDb.views);
      setnewImage(imagesfromDb.VRimages[0].url);
    });
  };

  const updateTourCount = () => {
    setcount((count) => count + 1);
    DataManager.get(tourName.id, "photoAlbums", "").then((album) => {
      const editedTour = { ...album };
      editedTour.views = count;
      DataManager.update("photoAlbums", editedTour);
    });
  };

  useEffect(() => {
    getTourImages();
  }, []);

  return (
    <Container className="tourViewerSect">
      <div className="move">
        <section className="vrImageViewer1 move container">
          <a-scene class="aframebox1" embedded>
            <a-sky src={newImage}></a-sky>
          </a-scene>
          <section className="tourImageLinks1 move topright">
            {images.map((image) => (
              <Button
                color="info"
                key={image.id}
                className="imageBtns"
                id={image.id}
                value={image.url}
                onClick={handleFieldChange}
              >
                {image.name}
              </Button>
            ))}
          </section>
          <h6 className="tourTitle tourNameHeader move">{tourName.title}</h6>
          <div className="topleft tourImageLinks1 move ">
            <Button
              color="primary"
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
            >
              Tour Description
            </Button>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>{tourName.description}</CardBody>
              </Card>
            </Collapse>
          </div>
        </section>
        {/* <div>count: {count}</div> */}
        {/* <button onClick={updateTourCount}>Count</button> */}
      </div>
    </Container>
  );
};

export default TourViewer;
