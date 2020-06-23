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

  // const handleFieldChange = (evt) => {
  //   const stateToChange = { ...tourName };
  //   stateToChange[evt.target.id] = evt.target.value;
  //   setTourName(stateToChange);
  // };

  const updateTour = (id) => {
    setLoading(true);

    DataManager.get(id, "photoAlbums", "").then((album) => {
      setAlbum(album);
      const editedTour = { ...album };
      editedTour.trash = true;
      // console.log(editedTour);
      DataManager.update("photoAlbums", editedTour).then((newTours) => {
        DataManager.getUsersTours("photoAlbums", props.userId, false).then(
          (toursFromAPI) => {
            setTours(toursFromAPI);
          }
        );
      });
    });
  };

  // const deleteTour = (id) => {
  //   DataManager.delete("photoAlbums", id).then(() =>
  //     DataManager.getUsersTours("photoAlbums", props.userId).then(
  //       (toursFromAPI) => {
  //         setTours(toursFromAPI);
  //       }
  //     )
  //   );
  // };

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

  return (
    <>
      <section className="pgContainer bkgd">
        <div className="tourPgHeader centerItem">
          <h5 className="margin4">
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
              Deleted Tours{" "}
            </Button>
          </div>
          <h5 className="createdVirtualToursHead">Created Virtual Tours</h5>
          <section className="createTourBtn">
            <NavLink to="/createphotoAlbum" className="createphotoAlbum">
              <Button
                outline
                color="primary"
                className="createTour bgBlueTheme  button1"
                type="button"
              >
                + Create a New Virtual Tour
              </Button>
            </NavLink>
          </section>
          <hr className="blueDevideLine"></hr>
          <section className="tourDisplaySect">
            <div className="container-cards">
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
