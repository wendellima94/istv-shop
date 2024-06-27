import React from "react";
import "./style.css";

export default function SliderTop({ imageSrc }) {
  return (
    <div>
      <img src={imageSrc} alt="" className="bg-image" />
    </div>
  );
}
