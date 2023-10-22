import React from "react";
import "./ChipUI.css";

function ChipUI(props) {
  return (
    <div className="chip_container">
      <p>{props.text}</p>
    </div>
  );
}

export default ChipUI;
