import React from "react";
import "./CreateQuizSteps.css";
import { useDispatch, useSelector } from "react-redux";
import QuizCard from "../QuizCard/QuizCard";
import { cleanQuizEntity, previousStep } from "../../ReduxStrore/QuizSlice";
import axios from "axios";

function CreateQuizStep3() {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quiz);

  const moveBackward = (e) => {
    e.preventDefault();
    dispatch(previousStep());
  };
  const saveData = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const url = "http://localhost:8080/quiz/" + userId;
    console.log(url);
    axios
      .post(url, quizData)
      .then((response) => {
        console.log(response);
        dispatch(cleanQuizEntity());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="quiz_steps_creation_container">
      <QuizCard />
      <div className="step_btns">
        <button className="reusable_btn" onClick={moveBackward}>
          Add more questions
        </button>
        <button className="reusable_btn" onClick={saveData}>
          Save Quiz
        </button>
      </div>
    </div>
  );
}

export default CreateQuizStep3;
