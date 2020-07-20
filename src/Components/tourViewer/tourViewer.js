import React, { useState, useEffect } from "react";
import "aframe";
import DataManager from "../../modules/DataManager";
import "./tourViewer.css";
import { Collapse, Button, CardBody, Card, Container } from "reactstrap";
import ReactGa from "react-ga";
import ImagesCard from "./imagesCard/imagesCard";

const TourViewer = (props) => {
  const [tourData, setTourData] = useState([]);
  const [newImage, setnewImage] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggle2 = () => setIsOpen2(!isOpen2);

  const handleFieldChange = (evt) => {
    ReactGa.event({
      category: "Button",
      action: "clicked new image in tour",
    });
    const stateToChange = evt.target.value;
    setnewImage(stateToChange);
  };

  useEffect(() => {
    DataManager.getTourImages(props.tourId).then((tourInfo) => {
      setTourData(tourInfo);
      setnewImage(tourInfo.VRimages[0].url);
    });
  }, [props.tourId]);

  return (
    <Container>
      <div className="">
        <section>
          <a-scene class="aframebox1" embedded>
            <a-sky src={newImage}></a-sky>
          </a-scene>
          {/* <section className="tourImageLinks1 bottomright">
            <ImagesCard handleFieldChange={handleFieldChange} {...props} />
          </section> */}
          <h6 className="tourTitle tourNameHeader move">{tourData.title}</h6>
          <section className="tourMenuBtns topleft tourImageLinks1 move">
            <div className="">
              <Button
                color="primary"
                onClick={toggle}
                style={{ marginBottom: "1rem" }}
              >
                Tour Description
              </Button>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>{tourData.description}</CardBody>
                </Card>
              </Collapse>
            </div>
            <div className="">
              <Button
                color="primary"
                onClick={toggle2}
                style={{ marginBottom: "1rem" }}
              >
                VR Rooms
              </Button>
              <Collapse isOpen={isOpen2}>
                <section className="">
                  <Card>
                    <CardBody>
                      <ImagesCard
                        handleFieldChange={handleFieldChange}
                        {...props}
                      />
                    </CardBody>
                  </Card>
                </section>
              </Collapse>
            </div>
          </section>
        </section>
      </div>
    </Container>
  );
};

export default TourViewer;
