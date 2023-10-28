import React from "react";
import "./ParticipationQuestionCard.css";
import BasicQuestionCard from "../BasicQuestionCard/BasicQuestionCard";
import Chip1 from "../../../../UI Elements/Chip/Chip1/Chip1";
import Chip3 from "../../../../UI Elements/Chip/Chip3/Chip3";

function ParticipationQuestionCard(props) {
  console.log(props);
  return (
    <div className="participation_question_card_container">
      <BasicQuestionCard question={props.question} />
      <div className="participation_question_card_section">
        <Chip3 text="Selected:" />
        {props.question.answers.map(
          (answer) =>
            props.selectedAnswers.includes(answer.id) && (
              <Chip1 key={answer.id} text={answer.statement} />
            )
        )}
      </div>
    </div>
  );
}

export default ParticipationQuestionCard;
