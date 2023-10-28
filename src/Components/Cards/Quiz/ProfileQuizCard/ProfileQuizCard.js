import React from "react";
import SingleQuizInfoCard from "../SingleQuizInfoCard/SingleQuizInfoCard";
import "./ProfileQuizCard.css";
import axios from "axios";

function ProfileQuizCard(props) {
  const deleteQuiz = () => {
    const url = "http://localhost:8080/quiz/remove/" + props.quiz.id;
    axios
      .put(url)
      .then((resp) => {
        console.log(resp);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const togglePublish = () => {
    const url = "http://localhost:8080/quiz/public/" + props.quiz.id;
    axios
      .put(url)
      .then((resp) => {
        console.log(resp);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="profile_quiz_card_container">
      <SingleQuizInfoCard quiz={props.quiz} />
      <div className="profile_quiz_card_btns">
        <button className="btn3" onClick={deleteQuiz}>
          Delete
        </button>
        <button className="btn2" onClick={togglePublish}>
          Publish
        </button>
        <button className="btn1">See Questions</button>
      </div>
    </div>
  );
}

export default ProfileQuizCard;
