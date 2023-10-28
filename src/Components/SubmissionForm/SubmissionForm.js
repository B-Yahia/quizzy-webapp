import React, { useState } from "react";
import "./SubmissionForm.css";
import axios from "axios";
import Participation from "../Participation/Participation";
import { Link } from "react-router-dom";

function SubmissionForm(props) {
  const [participationRes, setParticipationRes] = useState();
  const [firtName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const submitAll = async () => {
    let url = "http://localhost:8080/participant";
    const participation = {
      score: 0,
      firstName: firtName,
      lastName: lastName,
      quizId: props.quizId,
      questionResponseList: props.questionResponseList,
    };
    axios
      .post(url, participation)
      .then((resp) => {
        console.log(resp);
        setParticipationRes(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="submission_form_container">
      <div>
        <label>First name </label>
        <input
          type="text"
          value={firtName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>last name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div>
        <label>email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={submitAll} className="btn1">
        submit
      </button>
      {!!participationRes && <Participation participation={participationRes} />}
      {!!participationRes && (
        <Link
          to={"/public"}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <button className="btn1">Go to Quizzes page</button>
        </Link>
      )}
    </div>
  );
}

export default SubmissionForm;
