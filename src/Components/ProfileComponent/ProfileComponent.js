import React from "react";
import { useDispatch } from "react-redux";
import "./ProfileComponent.css";
import { logoutRed } from "../../ReduxStrore/LoginSlice";
import { Link } from "react-router-dom";

function ProfileComponent() {
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(logoutRed());
  };

  return (
    <div className="profile_component_container">
      <div>
        <h1>Profile Component</h1>
        <button className="btn1">
          <Link
            to={"/profile"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Go Back to Dashboard
          </Link>
        </button>
        <button onClick={(e) => logout(e)} className="btn3">
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileComponent;
