import React from "react";
import "./TitleUIElement.css";

function TitleUIElement(props) {
  return (
    <div className="title_container">
      <p>{props.text}</p>
    </div>
  );
}

export default TitleUIElement;
