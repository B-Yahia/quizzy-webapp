import React from "react";
import { useDispatch } from "react-redux";
import "./ProfileComponent.css";
import { logoutRed } from "../../ReduxStrore/LoginSlice";
import { Link } from "react-router-dom";

function ProfileComponent() {
  const dispatch = useDispatch();

  return (
    <div className="profile_component_container">
      <h1>Profile Component</h1>
      <button>
        <Link
          to={"/profile"}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          Go Back to Dashboard
        </Link>
      </button>
      <br />
      <button onClick={() => dispatch(logoutRed())}>Logout</button>
    </div>
  );
}

export default ProfileComponent;
