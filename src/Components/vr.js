import "aframe";
import React from "react";
import "./vr.css";

const VRscene = () => {
  return (
    <a-scene class="aframebox" embedded>
      <a-sky src="https://res.cloudinary.com/duo4xxmj8/image/upload/v1591889410/360imgFolder/qwzxuuvy45i6egiigbws.jpg"></a-sky>
    </a-scene>
  );
};

export default VRscene;
