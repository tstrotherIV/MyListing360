import React, { useState } from "react";
import DataManager from "../../modules/DataManager";
import "aframe";

// import "./imageUpload.css";

function EditAddImage(props) {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [photoAlbum, setphotoAlbum] = useState({
    userId: props.photoAlbum.userId,
    photoAlbumId: props.photoAlbum.id,
    name: "",
    description: "",
    url: "",
  });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...photoAlbum };
    stateToChange[evt.target.id] = evt.target.value;
    setphotoAlbum(stateToChange);
  };

  const addNewImage = (evt) => {
    evt.preventDefault();
    if (
      photoAlbum.name === "" ||
      photoAlbum.description === ""
      // || photoAlbum.url === ""
    ) {
      window.alert("Please complete the form");
    } else {
      setLoading(true);
      const newAlbum = { ...photoAlbum };
      newAlbum.url = image;
      DataManager.postNewImage(newAlbum).then(() =>
        props.history.push(`/tours/${props.userId}`)
      );
    }
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "360img");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/duo4xxmj8/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <div className="App">
        <h1>Upload Image</h1>
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadImage}
        />
        {loading && <h3>Please wait...</h3>}
      </div>
      <div className="addImageFormFields">
        <input
          onChange={handleFieldChange}
          type="text"
          id="name"
          placeholder="Name your Image (eg: Living Room)"
        />

        <input
          onChange={handleFieldChange}
          type="text"
          id="description"
          placeholder="Enter a Description for the Room (eg: “square footage, number of rooms…”) "
          required
        />
      </div>
      <br></br>
      <section className="">
        <div className="imageSaveBtn">
          <button
            type="button"
            className="right"
            disabled={""}
            onClick={addNewImage}
          >
            Add Image to my tour!
          </button>
        </div>

        <section>
          <a-scene class="aframebox" embedded>
            <a-sky src={image}></a-sky>
          </a-scene>
        </section>
      </section>
    </div>
  );
}

export default EditAddImage;
