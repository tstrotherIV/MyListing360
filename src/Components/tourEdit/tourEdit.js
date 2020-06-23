import React, { useState, useEffect } from "react";
import DataManager from "../../modules/DataManager";
import EditAddImage from "../addImage/addImage";
import "./tourEdit.css";
import {
  Card,
  CardImg,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const EditTour = (props) => {
  const [loading, setLoading] = useState(false);
  const [NewHTML, setNewHTML] = useState(false);
  const [images, setImages] = useState([]);
  const [photoAlbum, setphotoAlbum] = useState({
    title: "",
    description: "",
    userId: props.userId,
  });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...photoAlbum };
    stateToChange[evt.target.id] = evt.target.value;
    setphotoAlbum(stateToChange);
  };

  const getTourImages = () => {
    return DataManager.getTourImages(props.tourId).then((imagesfromDb) => {
      setImages(imagesfromDb.VRimages);
    });
  };

  const updateTour = (evt) => {
    evt.preventDefault();
    setLoading(true);

    const editedTour = {
      id: props.match.params.tourId,
      title: photoAlbum.title,
      description: photoAlbum.description,
      userId: props.userId,
      trash: false,
    };

    DataManager.update("photoAlbums", editedTour).then(() =>
      props.history.push(`/tours/${props.userId}`)
    );
  };

  const deleteImage = (id) => {
    DataManager.delete("VRimages", id).then(() =>
      DataManager.getTourImages(props.tourId).then((imagesfromDb) => {
        setImages(imagesfromDb.VRimages);
      })
    );
  };

  const addNewImage = () => {
    setNewHTML(
      <EditAddImage photoAlbum={photoAlbum} setImages={setImages} {...props} />
    );
  };

  useEffect(() => {
    DataManager.get(props.match.params.tourId, "photoAlbums", "").then(
      (photoAlbum) => {
        setphotoAlbum(photoAlbum);
        setLoading(false);
        getTourImages();
      }
    );
  }, []);

  return (
    <>
      <Form>
        <fieldset>
          <div className="tourContent">
            <h2 className="alignLeft">Edit your Tour Details</h2>
            <FormGroup>
              <Label htmlFor="name">Tour Name</Label>
              <Input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="title"
                value={photoAlbum.title}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Description">Description</Label>
              <Input
                type="textarea"
                required
                className="Desc"
                onChange={handleFieldChange}
                id="description"
                value={photoAlbum.description}
              />
            </FormGroup>
            <div className="submitBtn">
              <button
                type="button"
                // disabled={isLoading}
                onClick={updateTour}
                className="btn btn-primary"
              >
                Save Changes
              </button>
            </div>
          </div>
          <br></br>
          <section className="tourImageSect">
            <h2>Remove Images from your Tour</h2>
            <div className="imageDisplaySect">
              <Card className="imageCards">
                {images.map((image) => (
                  <section
                    className="sepImage"
                    key={image.id}
                    id={image.id}
                    value={image.name}
                  >
                    <CardTitle>{image.name} </CardTitle>

                    <CardImg
                      src={image.url}
                      alt=""
                      style={{ width: "300px" }}
                    />
                    <Button
                      outline
                      color="danger"
                      className="deleteTourBtn gap"
                      onClick={() => {
                        deleteImage(image.id);
                      }}
                    >
                      Remove Image
                    </Button>
                  </section>
                ))}
              </Card>
            </div>
          </section>
          <section>
            <div className="editAddNewImg">
              <h2>Add Images to your Tour</h2>
              <button type="button" id="editAddNewImg" onClick={addNewImage}>
                Add Image to my tour!
              </button>
              <section>{NewHTML}</section>
            </div>
          </section>
        </fieldset>
      </Form>
    </>
  );
};

export default EditTour;
