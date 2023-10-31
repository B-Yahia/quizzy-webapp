import React from "react";
import SingleQuizInfoCard from "../SingleQuizInfoCard/SingleQuizInfoCard";
import "./ProfileQuizCard.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../../ReduxStrore/NotifSlice";

function ProfileQuizCard(props) {
  const dispatch = useDispatch();

  const deleteQuiz = () => {
    const url =
      "https://quizsurveyapp-production.up.railway.app/quiz/remove/" +
      props.quiz.id;
    axios
      .put(url)
      .then((resp) => {
        dispatch(addNotification("Question removed"));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const togglePublish = () => {
    const url =
      "https://quizsurveyapp-production.up.railway.app/quiz/public/" +
      props.quiz.id;
    axios
      .put(url)
      .then((resp) => {
        dispatch(addNotification("Question published proprety is updated"));
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
          {props.quiz.publicAccess ? "Published" : "Unpublished"}
        </button>
        <button className="btn1">See Questions</button>
      </div>
    </div>
  );
}

export default ProfileQuizCard;
