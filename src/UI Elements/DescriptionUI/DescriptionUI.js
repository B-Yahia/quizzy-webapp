import React from "react";
import "./DescriptionUI.css";

function DescriptionUI(props) {
  return (
    <div className="description_container">
      <p>{props.text}</p>
    </div>
  );
}

export default DescriptionUI;
