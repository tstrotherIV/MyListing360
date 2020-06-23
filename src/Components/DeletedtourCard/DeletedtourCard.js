import React from "react";
import { Link } from "react-router-dom";
// import DataManager from "../../modules/DataManager";
import "./DeletedtourCard.css";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const DeletedTourCard = (props) => {
  return (
    <div className="tourCardDeleted">
      <Card>
        <CardBody>
          <section className="">
            <CardTitle>
              <h6>Tour Name:</h6>
            </CardTitle>
            <CardSubtitle>{props.tour.title}</CardSubtitle>
          </section>
          <section className="tourDescription">
            <h6>Tour description: </h6>
            <CardText>{props.tour.description}</CardText>
          </section>
          <section className="tourCrudBtns">
            <div className="tourEditBtns">
              <Button
                outline
                color="success"
                className="viewTourBtn gap"
                onClick={() => {
                  props.history.push(`/tourViewer/${props.tour.id}`);
                }}
              >
                View Tour
              </Button>
              <Button
                color="info"
                className="putTourBackBtn gap"
                onClick={() => {
                  props.putTourBack(props.tour.id);
                }}
              >
                Put Tour Back
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
            </div>
          </section>
        </CardBody>
      </Card>
    </div>
  );
};

export default DeletedTourCard;
