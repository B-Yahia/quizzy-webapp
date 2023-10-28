import React from "react";
import TextContainer1 from "../../../../UI Elements/TextContainer/TextContainer1/TextContainer1";
import TextContainer2 from "../../../../UI Elements/TextContainer/TextContainer2/TextContainer2";
import Chip1 from "../../../../UI Elements/Chip/Chip1/Chip1";
import QuestionCard from "../../Question/QuestionsCard/QuestionsCard";
import "./CreationQuizCard.css";
import { useSelector } from "react-redux";
import Chip3 from "../../../../UI Elements/Chip/Chip3/Chip3";

function CreationQuizCard() {
  const quizData = useSelector((state) => state.quiz);
  return (
    <div className="creation_quiz_card_container">
      <div className="creation_quiz_card_title">
        <TextContainer1 text={quizData.title} />
      </div>
      <div className="creation_quiz_card_description">
        <TextContainer2 text={quizData.description} />
      </div>
      <div className="creation_quiz_card_tags">
        <Chip3 text="Category : " /> <Chip1 text={quizData.category} />
      </div>
      <div className="creation_quiz_card_tags">
        <Chip3 text="Tags : " />
        {quizData.tags.map((tag, index) => (
          <Chip1 key={index} text={tag} />
        ))}
      </div>
      <QuestionCard />
    </div>
  );
}

export default CreationQuizCard;
