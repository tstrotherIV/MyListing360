import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import "./tourCard.css";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";

const TourCard = (props) => {
  return (
    <div className="tourCard">
      <Card>
        <CardBody>
          <section className="">
            <CardTitle>
              <h6>Name: {props.tour.title}</h6>
            </CardTitle>
            {/* <CardSubtitle>{props.tour.title}</CardSubtitle> */}
          </section>
          <section className="tourDescription">
            <h6>Tour description: </h6>
            <CardText>{props.tour.description}</CardText>
          </section>
          <section className="tourCrudBtns">
            <div className="tourEditBtns">
              <Button
                color="secondary"
                className="viewTourBtn gap"
                onClick={() => {
                  props.history.push(`/tourViewer/${props.tour.id}`);
                }}
              >
                View Tour
              </Button>

              <Button
                color="info"
                className="editTourBtn gap"
                onClick={() => {
                  props.history.push(`/tourEdit/${props.tour.id}`);
                }}
              >
                Edit Tour
              </Button>

              <Button
                color="danger"
                className="deleteTourBtn gap"
                onClick={() => {
                  props.deleteTour(props.tour.id);
                }}
              >
                Delete Tour
              </Button>
              <div>
                <h4>Share Tour</h4>
                <FacebookShareButton
                  url={`http://localhost:3000/tourViewer/${props.tour.id}`}
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <LinkedinShareButton
                  url={`https://www.linkedin.com/in/tomstrother/`}
                  className="Demo__some-network__share-button"
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>
            </div>
          </section>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
