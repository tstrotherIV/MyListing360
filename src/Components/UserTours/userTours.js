import React from "react";
import "./userTours.css";

const UserTours = () => {
  return (
    <>
      <section className="pgContainer">
        <div className="tourPgHeader centerItem">
          <h5>Virtual Tour Dashboard</h5>
        </div>
        <div className="centerItem">
          <button className="createTour bgBlueTheme noBtnBorder" type="button">
            + Create a New Virtual Tour of my Real Estate Listing
          </button>
        </div>
        <section className="tourFilterAndTrash">
          <div className="tourFilterBoxes centerItem">
            <input
              onChange={""}
              type="filterName"
              className="filterByNameBox"
              id="filterByName"
              placeholder="Search Virtual Tours..."
              required=""
              autoFocus=""
            />
            <button className="trashCanBtn" type="button">
              Trash Can
            </button>
          </div>
          <h5 className="createdVirtualToursHead">Created Virtual Tours</h5>
          <hr className="blueDevideLine"></hr>
          <section className="tourDisplaySect">
            <h5>(...Below is placeholder text...)</h5>
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
