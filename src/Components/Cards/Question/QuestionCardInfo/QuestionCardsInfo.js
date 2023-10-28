import React from "react";
import "./QuestionCardsInfo.css";
import TextContainer1 from "../../../../UI Elements/TextContainer/TextContainer1/TextContainer1";
import Chip2 from "../../../../UI Elements/Chip/Chip2/Chip2";

function QuestionCardsInfo(props) {
  return (
    <div className="question_card_info_container">
      <TextContainer1 text={props.question.statement} />
      <div className="question_card_info_btns_container">
        <Chip2 text={props.question.statement} />
      </div>
    </div>
  );
}

export default QuestionCardsInfo;
