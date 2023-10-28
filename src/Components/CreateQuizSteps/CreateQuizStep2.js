import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  addQuestion,
  previousStep,
} from "../../ReduxStrore/QuizSlice";
import "./CreateQuizSteps.css";
import { addNotification } from "../../ReduxStrore/NotifSlice";
import QuestionCard from "../Cards/Question/QuestionsCard/QuestionsCard";

function CreateQuizStep2() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState("");
  const dispatch = useDispatch();
  const questionsLength = useSelector((state) => state.quiz.questions.length);

  const addAnswer = (e) => {
    e.preventDefault();
    if (answer.length !== 0) {
      const newAnswer = {
        statement: answer,
        correct: false,
      };
      setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
      setAnswer("");
    } else {
      dispatch(addNotification("Please enter an answer"));
    }
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
    if (answers.length < 2) {
      dispatch(addNotification("You need at least two options for a question"));
    } else if (!answers.some((answer) => answer.correct)) {
      dispatch(addNotification("At least one answer needs to be correct"));
    } else if (question.length < 5) {
      dispatch(addNotification("Question should be longer than 4 characters"));
    } else {
      const newQuestion = {
        statement: question,
        answers: answers,
      };
      dispatch(addQuestion({ newQuestion }));
      setQuestion("");
      setAnswers([]);
      setAnswer("");
    }
  };

  const moveToNextStep = (e) => {
    e.preventDefault();
    if (questionsLength < 3) {
      dispatch(addNotification("The quiz must have at least 3 questions"));
    } else {
      dispatch(nextStep());
    }
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
        <button onClick={addQuestionToList} className="btn1">
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
        <button onClick={addAnswer} className="btn1">
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
        <button onClick={moveBackward} className="btn1">
          Step back
        </button>
        <button onClick={moveToNextStep} className="btn1">
          Next step
        </button>
      </div>
    </div>
  );
}

export default CreateQuizStep2;
