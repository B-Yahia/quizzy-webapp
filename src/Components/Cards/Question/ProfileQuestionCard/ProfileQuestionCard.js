import React from "react";
import "./ProfileQuestionCard.css";

function ProfileQuestionCard(props) {
  return (
    <div className="questions_card_container">
      {props.questions.map((question) => (
        <div key={question.id} className="single_question_container">
          <p className="question_statement"> Question : {question.statement}</p>
          <div className="answer_statement">
            <p>Answers :</p>
            {question.answers.map((answer) => (
              <p key={answer.id}> {answer.statement} </p>
            ))}
          </div>
          <div className="answer_statement">
            <p>Correct Answers :</p>
            {question.answers.map((answer) =>
              answer.correct ? (
                <p key={answer.id}> {answer.statement} </p>
              ) : (
                <p key={answer.id}></p>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileQuestionCard;
