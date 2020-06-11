import React, { useState } from "react";
import img from "./images/thetaimage.jpeg";
import "./App.css";
// import VRscene from "./vr";

function App() {
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
        {loading ? <h3>Loading...</h3> : <img src="" />}
      </div>
      <br></br>
      <section>
        <a-scene class="aframebox" embedded>
          <a-sky src={image}></a-sky>
        </a-scene>
      </section>
    </div>
  );
}

export default App;
