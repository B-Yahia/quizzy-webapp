import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./LoginComponent.css";
import { loginRed } from "../../ReduxStrore/LoginSlice";

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    const url = "http://localhost:8080/auth/login";
    const credentials = {
      username: username,
      password: password,
    };
    axios
      .post(url, credentials)
      .then((response) => {
        console.log(response);
        dispatch(loginRed);
        navigate("/profile");
        localStorage.setItem("userId", response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login_container">
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
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default LoginComponent;
