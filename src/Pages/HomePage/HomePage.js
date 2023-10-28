import React, { useState } from "react";
import "./HomePage.css";
import LoginComponent from "../../Components/LoginComponent/LoginComponent";
import SignupComponent from "../../Components/SignupComponent/SignupComponent";
import ProfileComponent from "../../Components/ProfileComponent/ProfileComponent";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomePage() {
  const logged = useSelector((state) => state.login.value);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="home_page_container">
      {console.log(logged)}
      <div className="app_hero_section">
        <h3 className="animate-charcter"> QuizLab</h3>

        <button className="btn1">
          <Link
            to={"/public"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Take Quiz
          </Link>
        </button>
      </div>
      <div className="side_column">
        {logged ? (
          <></>
        ) : (
          <div className="home_Page_btns">
            <button onClick={() => setToggle(false)} className="btn1">
              Login
            </button>
            <button onClick={() => setToggle(true)} className="btn1">
              Sign-up
            </button>
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
