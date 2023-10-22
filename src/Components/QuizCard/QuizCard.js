import React from "react";
import { useSelector } from "react-redux";
import QuestionCard from "../QuestionCard/QuestionCard";
import "./QuizCard.css";
import TitleUIElement from "../../UI Elements/TitleUIElement/TitleUIElement";
import DescriptionUI from "../../UI Elements/DescriptionUI/DescriptionUI";
import ChipUI from "../../UI Elements/ChipUI/ChipUI";

function QuizCard() {
  const quizData = useSelector((state) => state.quiz);
  return (
    <div className="quiz_card_container">
      <div className="quiz_card_title">
        <TitleUIElement text={quizData.title} />
      </div>
      <div className="quiz_card_description">
        <DescriptionUI text={quizData.description} />
      </div>
      <div className="quiz_card_tags">
        <p>Category : </p> <ChipUI text={quizData.category} />
      </div>
      <div className="quiz_card_tags">
        <p>Tags :</p>
        {quizData.tags.map((tag, index) => (
          <ChipUI key={index} text={tag} />
        ))}
      </div>
      <QuestionCard />
    </div>
  );
}

export default QuizCard;
