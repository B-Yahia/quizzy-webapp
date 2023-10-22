import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  nextStep,
  addQuestion,
  previousStep,
} from "../../ReduxStrore/QuizSlice";
import "./CreateQuizSteps.css";
import QuestionCard from "../QuestionCard/QuestionCard";

function CreateQuizStep2() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState("");
  const dispatch = useDispatch();

  const addAnswer = (e) => {
    e.preventDefault();
    const newAnswer = {
      statement: answer,
      correct: false,
    };
    setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
    setAnswer("");
  };

  function updateAnswerCorrectness(index, value) {
    const updatedAnswers = answers.map((item, idx) => {
      if (idx === index) {
        return { ...item, correct: value };
      }
      return item;
    });

    setAnswers(updatedAnswers);
  }

  const addQuestionToList = (e) => {
    e.preventDefault();
    const newQuestion = {
      statement: question,
      answers: answers,
    };
    dispatch(addQuestion({ newQuestion }));
    setQuestion("");
    setAnswers([]);
    setAnswer("");
  };

  const moveToNextStep = (e) => {
    e.preventDefault();
    dispatch(nextStep());
  };
  const moveBackward = (e) => {
    e.preventDefault();
    dispatch(previousStep());
  };

  return (
    <div className="quiz_steps_creation_container">
      <div className="question_input_container">
        <label>Question</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={addQuestionToList} className="reusable_btn">
          Add question
        </button>
      </div>
      <div className="answer_input_container">
        <label>Answer</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={addAnswer} className="reusable_btn">
          +
        </button>
      </div>
      <div className="answers_display_container">
        {answers.map((item, index) => (
          <div key={index} className="answer_display_container">
            <p>{item.statement}</p>
            <div>
              <label>
                <input
                  type="radio"
                  name={`answer-${index}`}
                  value="false"
                  checked={!item.correct}
                  onChange={() => updateAnswerCorrectness(index, false)}
                />
                False
              </label>
              <label>
                <input
                  type="radio"
                  name={`answer-${index}`}
                  value="true"
                  checked={item.correct}
                  onChange={() => updateAnswerCorrectness(index, true)}
                />
                True
              </label>
            </div>
          </div>
        ))}
      </div>
      <QuestionCard />
      <div className="step_btns">
        <button onClick={moveBackward} className="reusable_btn">
          Step back
        </button>
        <button onClick={moveToNextStep} className="reusable_btn">
          Next step
        </button>
      </div>
    </div>
  );
}

export default CreateQuizStep2;
