import React from "react";
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
          <button className="viewTourBtn gap">View Tour</button>
          <button className="editTourBtn gap">Edit Tour</button>
          <button className="deleteTourBtn gap">Delete Tour</button>
        </div>
      </section>
    </div>
  );
};

export default TourCard;
