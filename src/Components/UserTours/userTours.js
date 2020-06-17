import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TourCard from "../tourCard/tourCard";
import DataManager from "../../modules/DataManager";
import "./userTours.css";

const UserTours = (props) => {
  const [tours, setTours] = useState([]);

  // const handleFieldChange = (evt) => {
  //   const stateToChange = { ...tourName };
  //   stateToChange[evt.target.id] = evt.target.value;
  //   setTourName(stateToChange);
  // };

  const getTours = () => {
    return DataManager.getUsersTours("photoAlbums", props.userId).then(
      (toursFromAPI) => {
        setTours(toursFromAPI);
      }
    );
  };

  useEffect(() => {
    getTours();
  }, []);

  return (
    <>
      <section className="pgContainer">
        <div className="tourPgHeader centerItem">
          <h5>Virtual Tour Dashboard</h5>
        </div>
        <div className="centerItem">
          <NavLink to="/createphotoAlbum">
            <button
              className="createTour bgBlueTheme noBtnBorder button1"
              type="button"
            >
              + Create a New Virtual Tour of my Real Estate Listing
            </button>
          </NavLink>
        </div>
        <section className="tourFilterAndTrash">
          <div className="tourFilterBoxes centerItem">
            <input
              // onChange=""
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
            <div className="container-cards">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} {...props} />
              ))}
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default UserTours;
