import React from "react";
import "./Participation.css";
import Chip2 from "../../UI Elements/Chip/Chip2/Chip2";
import Chip3 from "../../UI Elements/Chip/Chip3/Chip3";
import ParticipationQuestionCard from "../Cards/Question/ParticipationQuestionCard/ParticipationQuestionCard";

function Participation(props) {
  return (
    <div className="participation_container">
      <div className="participant_data">
        <div className="participant_name">
          <Chip2
            text={
              "Participant name : " +
              props.participation.firstName +
              " " +
              props.participation.lastName
            }
          />
        </div>
        <Chip3 text={"Score : " + props.participation.score} />
      </div>
      <div className="participation_question_responses">
        {props.participation.questionResponseList.map((qr) =>
          qr.correct ? (
            <div key={qr.id} className="participation_question_response ">
              <div className="correct"></div>
              <ParticipationQuestionCard
                question={qr.questionDTO}
                selectedAnswers={qr.selectedAnswerIds}
              />
            </div>
          ) : (
            <div key={qr.id} className="participation_question_response">
              <div className="incorrect"></div>
              <ParticipationQuestionCard
                question={qr.questionDTO}
                selectedAnswers={qr.selectedAnswerIds}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Participation;
