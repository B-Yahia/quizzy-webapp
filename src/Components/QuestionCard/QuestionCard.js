import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeQuestion } from "../../ReduxStrore/QuizSlice";
import "./QuestionCard.css";

function QuestionCard() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quiz.questions);
  const removeQtn = (index) => {
    dispatch(removeQuestion({ index }));
  };
  return (
    <div className="questions_display_container">
      {questions.map((qtn, index) => (
        <div key={index} className="question_display_container">
          <button className="rmv_btn" onClick={() => removeQtn(index)}>
            Remove
          </button>
          <p>{qtn.statement}</p>
          <div className="question_display_answers">
            {qtn.answers.map((anwr, index) =>
              anwr.correct ? (
                <p key={index} className="bg_correct">
                  {anwr.statement}
                </p>
              ) : (
                <p key={index}>{anwr.statement}</p>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionCard;
