import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import DeletedTourCard from "../DeletedtourCard/DeletedtourCard";
import DataManager from "../../modules/DataManager";
import "./trash.css";

const Trash = (props) => {
  const [tours, setTours] = useState([]);
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(false);

  const putTourBack = (id) => {
    setLoading(true);

    DataManager.get(id, "photoAlbums", "").then((album) => {
      setAlbum(album);
      const editedTour = { ...album };
      editedTour.trash = false;
      // console.log(editedTour);
      DataManager.update("photoAlbums", editedTour).then((newTours) => {
        DataManager.getUsersTours("photoAlbums", props.userId, true).then(
          (toursFromAPI) => {
            setTours(toursFromAPI);
          }
        );
      });
    });
  };

  const deleteTour = (id) => {
    DataManager.delete("photoAlbums", id).then(() =>
      DataManager.getUsersTours("photoAlbums", props.userId, true).then(
        (toursFromAPI) => {
          setTours(toursFromAPI);
        }
      )
    );
  };

  const getTours = () => {
    return DataManager.getUsersTours("photoAlbums", props.userId, true).then(
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
        <section className="tourFilterAndTrash">
          <h5 className="createdVirtualToursHead">Deleted Tours</h5>
          <hr className="blueDevideLine"></hr>

          <section className="tourDisplaySect">
            <div className="container-cards">
              {tours.map((tour) => (
                <DeletedTourCard
                  key={tour.id}
                  tour={tour}
                  deleteTour={deleteTour}
                  putTourBack={putTourBack}
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

export default Trash;
