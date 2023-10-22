import React, { useState } from "react";
import "./SignupComponent.css";
import axios from "axios";

function SignupComponent() {
  const [firstname, SetFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      console.log(password);
      console.log(confirmPassword);
    } else {
      const url = "http://localhost:8080/auth/register";
      const newUser = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        username: username,
        dob: dob,
        password: password,
      };
      axios
        .post(url, newUser)
        .then((response) => {
          console.log(response);
          setDob("");
          setEmail("");
          setPassword("");
          setUsername("");
          setlastname("");
          SetFirstname("");
          setConfirmPassword("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="sign_up_container">
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
            type="password"
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
      <button onClick={handleSubmit}>Create Account</button>
    </div>
  );
}

export default SignupComponent;
