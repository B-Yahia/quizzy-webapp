import React, { useState } from "react";
import "./HomePage.css";
import LoginComponent from "../../Components/LoginComponent/LoginComponent";
import SignupComponent from "../../Components/SignupComponent/SignupComponent";
import ProfileComponent from "../../Components/ProfileComponent/ProfileComponent";
import { useSelector } from "react-redux";

function HomePage() {
  const logged = useSelector((state) => state.login.value);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="home_page_container">
      <div className="app_hero_section">
        <h1>QuizLab</h1>
      </div>
      <div className="side_column">
        {logged ? (
          <></>
        ) : (
          <div className="home_Page_btns">
            <button onClick={(e) => setToggle(false)}>Login</button>
            <button onClick={(e) => setToggle(true)}>Sign-up</button>
          </div>
        )}
        {logged ? (
          <ProfileComponent />
        ) : (
          <>{toggle ? <SignupComponent /> : <LoginComponent />}</>
        )}
      </div>
    </div>
  );
}

export default HomePage;
