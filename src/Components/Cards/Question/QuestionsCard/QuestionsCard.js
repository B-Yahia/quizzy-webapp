import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeQuestion } from "../../../../ReduxStrore/QuizSlice";
import "./QuestionsCard.css";
import BasicQuestionCard from "../BasicQuestionCard/BasicQuestionCard";

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
          <BasicQuestionCard question={qtn} />
          <button className="rmv_btn btn3" onClick={() => removeQtn(index)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default QuestionCard;
