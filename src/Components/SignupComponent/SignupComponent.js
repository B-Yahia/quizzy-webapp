import React, { useState } from "react";
import "./SignupComponent.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNotification } from "../../ReduxStrore/NotifSlice";
import { loginRed } from "../../ReduxStrore/LoginSlice";

function SignupComponent() {
  const [firstname, SetFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatsh = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      dispatsh(addNotification("passwords do not match"));
    } else {
      const url =
        "https://quizsurveyapp-production.up.railway.app/auth/register";
      const newUser = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        username: username,
        dateOfBirth: dob,
        password: password,
      };
      axios
        .post(url, newUser)
        .then((response) => {
          console.log(response);
          dispatsh(addNotification("account created"));
          setDob("");
          setEmail("");
          setPassword("");
          setUsername("");
          setlastname("");
          SetFirstname("");
          setConfirmPassword("");
        })
        .catch((error) => {
          console.log(error.response.data);
          if (error.response.data.firstName) {
            dispatsh(addNotification(error.response.data.firstName));
          }
          if (error.response.data.lastName) {
            dispatsh(addNotification(error.response.data.lastName));
          }
          if (error.response.data.email) {
            dispatsh(addNotification(error.response.data.email));
          }
          if (error.response.data.Messages) {
            dispatsh(addNotification(error.response.data.Messages));
          }
        });
    }
  };
  return (
    <div className="sign_up_container">
      <div>
        <h1>Create account</h1>
        <form className="signup_form">
          <div>
            <label>First name</label>
            <input
              type="text"
              placeholder="fisrt name"
              value={firstname}
              onChange={(e) => SetFirstname(e.target.value)}
            />
          </div>
          <div>
            <label>Last name</label>
            <input
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>
          <div>
            <label>Date of birth</label>
            <input
              type="date"
              placeholder="Date of birth"
              max="2018-01-01"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </form>
        <button onClick={handleSubmit} className="btn2">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default SignupComponent;
