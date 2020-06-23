import React, { useState } from "react";
import { Link } from "react-router-dom";
// import DataManager from "../../modules/DataManager";
import {
  FacebookShareButton,
  LinkedinShareButton,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import "./tourCard.css";
import { Button } from "reactstrap";

const TourCard = (props) => {
  return (
    <div className="tourCard">
      <section className="tourName">
        <h6>Tour Name:</h6>
        <h4>{props.tour.title}</h4>
      </section>
      <section className="tourDescription">
        <h6>Tour description: </h6>
        <h4>{props.tour.description}</h4>
      </section>
      <section className="tourCrudBtns">
        <div className="tourEditBtns">
          <Link to={`/tourViewer/${props.tour.id}`}>
            <Button color="secondary" className="viewTourBtn gap">
              View Tour
            </Button>
          </Link>
          <Link to={`/tourEdit/${props.tour.id}`}>
            <Button color="info" className="editTourBtn gap">
              Edit Tour
            </Button>
          </Link>
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
    </div>
  );
};

export default TourCard;
