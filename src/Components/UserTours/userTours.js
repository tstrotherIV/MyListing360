import React from "react";
import "./userTours.css";

const UserTours = () => {
  return (
    <>
      <section>
        <div className="tourPgHeader"></div>
        <button className="createTourBtn" type="button">
          + Create a New Virtual Tour of my Real Estate Listing
        </button>
        <section className="tourFilterTrash">
          <div className="tourFilterBoxes">
            <input
              onChange={""}
              type="filterName"
              id="filterName"
              placeholder="Search Virtual Tours..."
              required=""
              autoFocus=""
            />
            <button className="createTourBtn" type="button">
              Trash Can
            </button>
          </div>
          <h4>Created Virtual Tours</h4>
          <hr className="blueDevideLine"></hr>
          <section className="tourDisplaySect">
            <h4>You don’t have any Virtual Tours</h4>
            <h4>
              Click Here to create a Virtual Tour of your Real Estate Listing
            </h4>
          </section>
        </section>
      </section>
    </>
  );
};

export default UserTours;
