import { Route, Redirect } from "react-router-dom";
import React from "react";
import HomePage from "./Home/home";
import Login from "./Auth/login";
import UserTours from "./UserTours/userTours";
import ImageUpload from "./tourCreator/imageUpload/imageUpload";
import CreatephotoAlbum from "./tourCreator/createTour/tourCreator";
import TourCard from "./tourCard/tourCard";
import TourViewer from "./tourViewer/tourViewer";
import TourEdit from "./tourEdit/tourEdit";
import CreateAcct from "./Auth/createAcct";
import Trash from "./trash/trash";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  const userId = parseInt(props.userId);

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <HomePage setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/createAcct"
        render={(props) => {
          return <CreateAcct setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/tours"
        render={(props) => {
          return <UserTours setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/tours/:userId(\d+)/"
        render={(props) => {
          return <UserTours setUser={setUser} userId={userId} {...props} />;
        }}
      />
      <Route
        exact
        path="/tours/:userId(\d+)/trash"
        render={(props) => {
          return <Trash setUser={setUser} userId={userId} {...props} />;
        }}
      />
      <Route
        path="/login"
        render={(props) => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
      <Route
        path="/createphotoAlbum"
        render={(props) => {
          return (
            <CreatephotoAlbum setUser={setUser} userId={userId} {...props} />
          );
        }}
      />
      <Route
        exact
        path="/tourCard"
        render={(props) => {
          return <TourCard setUser={setUser} userId={userId} {...props} />;
        }}
      />

      <Route
        path="/imageUpload/:photoAlbumId(\d+)/"
        render={(props) => {
          if (hasUser) {
            return (
              <ImageUpload
                photoAlbumId={parseInt(props.match.params.photoAlbumId)}
                userId={userId}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/tourViewer"
        render={(props) => {
          return <TourViewer setUser={setUser} userId={userId} {...props} />;
        }}
      />
      <Route
        exact
        path="/tourViewer/:tourId(\d+)/"
        render={(props) => {
          return (
            <TourViewer
              setUser={setUser}
              userId={userId}
              tourId={parseInt(props.match.params.tourId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/tourEdit/:tourId(\d+)/"
        render={(props) => {
          return (
            <TourEdit
              setUser={setUser}
              userId={userId}
              tourId={parseInt(props.match.params.tourId)}
              {...props}
            />
          );
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
