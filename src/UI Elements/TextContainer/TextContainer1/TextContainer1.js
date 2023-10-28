import React from "react";
import "./TextContainer1.css";

function TextContainer1(props) {
  return (
    <div className="text_container_1">
      <p>{props.text}</p>
    </div>
  );
}

export default TextContainer1;
