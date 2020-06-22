import React, { useState } from "react";
import { Link } from "react-router-dom";
// import DataManager from "../../modules/DataManager";
import { FacebookShareButton, FacebookIcon } from "react-share";
import "./tourCard.css";

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
            <button className="viewTourBtn gap">View Tour</button>
          </Link>
          <Link to={`/tourEdit/${props.tour.id}`}>
            <button className="editTourBtn gap">Edit Tour</button>
          </Link>
          <button
            className="deleteTourBtn gap"
            onClick={() => {
              props.deleteTour(props.tour.id);
            }}
          >
            Delete Tour
          </button>
          <div>
            <h4>Share Tour</h4>
            <FacebookShareButton
              url={`http://localhost:3000/tourViewer/${props.tour.id}`}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourCard;
