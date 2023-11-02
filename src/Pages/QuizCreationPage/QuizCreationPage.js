import React, { useEffect } from "react";
import "./QuizCreationPage.css";
import CreateQuizStep1 from "../../Components/CreateQuizSteps/CreateQuizStep1";
import { useSelector } from "react-redux";
import CreateQuizStep2 from "../../Components/CreateQuizSteps/CreateQuizStep2";
import CreateQuizStep3 from "../../Components/CreateQuizSteps/CreateQuizStep3";
import { useNavigate } from "react-router-dom";

function QuizCreationPage() {
  const step = useSelector((state) => state.quiz.step);
  const steps = [<CreateQuizStep1 />, <CreateQuizStep2 />, <CreateQuizStep3 />];
  const nav = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userId")) nav("/error");
  }, []);
  return (
    <div className="page_container">
      <div className="page_title">Create quiz step : " {step} "</div>
      {steps[step - 1] || null}
    </div>
  );
}

export default QuizCreationPage;
