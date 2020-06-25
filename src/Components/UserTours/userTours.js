import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TourCard from "../tourCard/tourCard";
import DataManager from "../../modules/DataManager";
import { Button } from "reactstrap";
import "./userTours.css";

const UserTours = (props) => {
  const [tours, setTours] = useState([]);
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(false);
  const [TrashedTours, setTrashedTours] = useState([]);

  const updateTour = (id) => {
    setLoading(true);

    DataManager.get(id, "photoAlbums", "").then((album) => {
      setAlbum(album);
      const editedTour = { ...album };
      editedTour.trash = true;
      DataManager.update("photoAlbums", editedTour).then((newTours) => {
        DataManager.getUsersTours("photoAlbums", props.userId, false).then(
          (toursFromAPI) => {
            setTours(toursFromAPI);
          }
        );
      });
    });
  };

  const getTours = () => {
    return DataManager.getUsersTours("photoAlbums", props.userId, false).then(
      (toursFromAPI) => {
        setTours(toursFromAPI);
      }
    );
  };

  const userTrash = () => {
    props.history.push(`/tours/${props.userId}/trash`);
  };

  useEffect(() => {
    getTours();
  }, []);

  useEffect(() => {
    DataManager.getUsersTours("photoAlbums", props.userId, true).then(
      (toursFromAPI) => {
        setTrashedTours(toursFromAPI);
      }
    );
  }, [tours, props.userId]);

  return (
    <>
      <section className="pgContainer bkgd">
        <div className="tourPgHeader centerItem">
          <h5 className="margin4 changeFont">
            {sessionStorage.getItem("loggedUserName")}, here is your Virtual
            Tour Dashboard
          </h5>
        </div>
        <div className="centerItem"></div>
        <section className="tourFilterAndTrash">
          <div className="tourFilterBoxes">
            <Button
              outline
              color="danger"
              className="trash"
              onClick={userTrash}
            >
              {" "}
              Deleted Tours ({TrashedTours.length}){" "}
            </Button>
          </div>
          <h5 className="createdVirtualToursHead changeFont">
            Created Virtual Tours
          </h5>
          <hr className="blueDevideLine"></hr>
          <section className="createTourBtn">
            <NavLink to="/createphotoAlbum" className="createphotoAlbum">
              <Button
                outline
                color="success"
                className="createTour bgBlueTheme  button1"
                type="button"
              >
                + Create a New Virtual Tour
              </Button>
            </NavLink>
          </section>
          <section className="tourDisplaySect">
            <div className="tourcards">
              {tours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  deleteTour={updateTour}
                  {...props}
                />
              ))}
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default UserTours;
