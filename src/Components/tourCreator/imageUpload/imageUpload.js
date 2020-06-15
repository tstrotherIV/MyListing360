import React, { useState } from "react";
import "aframe";
import "./imageUpload.css";

function ImageUpload() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

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
      <br></br>
      <section className="imageReturnFunc">
        <div className="imageSaveBtn">
          <button type="button" className="right" disabled={""} onClick={""}>
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

export default ImageUpload;
