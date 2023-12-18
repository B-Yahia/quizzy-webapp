import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./LoginComponent.css";
import { loginRed } from "../../ReduxStrore/LoginSlice";
import { addNotification } from "../../ReduxStrore/NotifSlice";

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://quizsurveyapp-production.up.railway.app/auth/login";
    const credentials = {
      username: username,
      password: password,
    };
    axios
      .post(url, credentials)
      .then((response) => {
        console.log(response);
        dispatch(loginRed());
        navigate("/profile");
        localStorage.setItem("userId", response.data.id);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.Messages)
          dispatch(addNotification(error.response.data.Messages));
      });
  };
  return (
    <div className="login_container">
      <div>
        <h1>Login to your account</h1>
        <form className="login_form">
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <button onClick={handleSubmit} className="btn2">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginComponent;
