import React from "react";
import SingleQuizInfoCard from "../SingleQuizInfoCard/SingleQuizInfoCard";
import "./ProfileQuizCard.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../../ReduxStrore/NotifSlice";
import { useNavigate } from "react-router-dom";

function ProfileQuizCard(props) {
  const dispatch = useDispatch();
  const nav = useNavigate();
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
        dispatch(addNotification("Something when wrong"));
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
        dispatch(addNotification("Something whent wrong"));
        console.log(error);
      });
  };

  const goQuestionsPage = async (e) => {
    e.preventDefault();
    nav("/profile/quiz/" + props.quiz.id);
  };

  const goToParticipationsList = async (e) => {
    e.preventDefault();
    nav("/profile/participations/" + props.quiz.id);
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
        <button className="btn1" onClick={(e) => goQuestionsPage(e)}>
          See Questions
        </button>
        <button className="btn1" onClick={(e) => goToParticipationsList(e)}>
          See Participations
        </button>
      </div>
    </div>
  );
}

export default ProfileQuizCard;
