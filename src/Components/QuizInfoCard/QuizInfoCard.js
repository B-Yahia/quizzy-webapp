import React from "react";
import TitleUIElement from "../../UI Elements/TitleUIElement/TitleUIElement";
import DescriptionUI from "../../UI Elements/DescriptionUI/DescriptionUI";
import ChipUI from "../../UI Elements/ChipUI/ChipUI";
import "./QuizInfoCard.css";
import { useNavigate } from "react-router-dom";

function QuizInfoCard(props) {
  const navigate = useNavigate();
  const StartQuiz = (id) => {
    const qlink = "/quiz/" + id;
    console.log(qlink);
    navigate(qlink);
  };

  return (
    <div className="quiz_info_card_container">
      <TitleUIElement text={props.quiz.title} />
      <DescriptionUI text={props.quiz.description} />
      <div className="quiz_info_card_row">
        <div className="quiz_info_card_row1">
          <div className="quiz_info_card_category">
            <p>Category :</p>
            <ChipUI text={props.quiz.category} />
          </div>
          <div className="quiz_info_card_tags">
            <p>Tags :</p>
            {props.quiz.tags.map((tag, index) => (
              <ChipUI key={index} text={tag} />
            ))}
          </div>
        </div>
        <button
          onClick={() => StartQuiz(props.quiz.id)}
          className="reusable_btn"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizInfoCard;
