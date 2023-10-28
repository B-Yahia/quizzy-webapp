import React from "react";
import SingleQuizInfoCard from "../SingleQuizInfoCard/SingleQuizInfoCard";
import { useNavigate } from "react-router-dom";
import "./PublicQuizCard.css";

function PublicQuizCard(props) {
  const navigate = useNavigate();
  const StartQuiz = (id) => {
    const qlink = "/quiz/" + id;
    console.log(qlink);
    navigate(qlink);
  };
  return (
    <div className="public_quiz_card_container">
      <SingleQuizInfoCard quiz={props.quiz} />
      <button onClick={() => StartQuiz(props.quiz.id)} className="btn1">
        Start Quiz
      </button>
    </div>
  );
}

export default PublicQuizCard;
