import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chip3 from "../../UI Elements/Chip/Chip3/Chip3";

function NotFoundPage() {
  const nav = useNavigate();
  const redirect = () => {
    nav("/");
  };
  useEffect(() => {
    setTimeout(redirect, 4000);
  });

  return (
    <div className="page_container">
      <h1>Not Found Page</h1>
      <Chip3 text="This page does not exist.you will be directed to the home page in 4s" />
    </div>
  );
}

export default NotFoundPage;
