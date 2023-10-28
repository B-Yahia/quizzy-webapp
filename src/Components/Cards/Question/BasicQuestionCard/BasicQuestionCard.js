import React from "react";
import "./BasicQuestionCard.css";
import TextContainer1 from "../../../../UI Elements/TextContainer/TextContainer1/TextContainer1";
import Chip1 from "../../../../UI Elements/Chip/Chip1/Chip1";
import Chip3 from "../../../../UI Elements/Chip/Chip3/Chip3";

function BasicQuestionCard(props) {
  return (
    <div className="basic_question_card_container">
      <TextContainer1 text={props.question.statement} />

      <div className="basic_question_card_row">
        <Chip3 text="Answers : " />
        {props.question.answers.map((answer, index) => (
          <Chip1 key={index} text={answer.statement} />
        ))}
      </div>
      <div className="basic_question_card_row">
        <Chip3 text="Correct Answers : " />
        {props.question.answers.map((answer, index) =>
          answer.correct ? <Chip1 key={index} text={answer.statement} /> : null
        )}
      </div>
    </div>
  );
}

export default BasicQuestionCard;
