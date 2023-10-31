import React from "react";
import "./CreateQuizSteps.css";
import { useDispatch, useSelector } from "react-redux";
import { cleanQuizEntity, previousStep } from "../../ReduxStrore/QuizSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addNotification } from "../../ReduxStrore/NotifSlice";
import CreationQuizCard from "../Cards/Quiz/CreationQuizCard/CreationQuizCard";

function CreateQuizStep3() {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quiz);
  const navigate = useNavigate();

  const moveBackward = (e) => {
    e.preventDefault();
    dispatch(previousStep());
  };
  const saveData = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const url =
      "https://quizsurveyapp-production.up.railway.app/quiz/" + userId;
    console.log(url);
    axios
      .post(url, quizData)
      .then((response) => {
        console.log(response);
        dispatch(cleanQuizEntity());
        navigate("/profile");
      })
      .catch((error) => {
        dispatch(addNotification("Error has occured"));
      });
  };

  return (
    <div className="quiz_steps_creation_container">
      <CreationQuizCard />
      <div className="step_btns">
        <button className="btn1" onClick={moveBackward}>
          Add more questions
        </button>
        <button className="btn1" onClick={saveData}>
          Save Quiz
        </button>
      </div>
    </div>
  );
}

export default CreateQuizStep3;
