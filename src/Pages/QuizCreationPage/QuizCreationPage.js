import React from "react";
import "./QuizCreationPage.css";
import CreateQuizStep1 from "../../Components/CreateQuizSteps/CreateQuizStep1";
import { useSelector } from "react-redux";
import CreateQuizStep2 from "../../Components/CreateQuizSteps/CreateQuizStep2";
import CreateQuizStep3 from "../../Components/CreateQuizSteps/CreateQuizStep3";

function QuizCreationPage() {
  const step = useSelector((state) => state.quiz.step);
  const steps = [<CreateQuizStep1 />, <CreateQuizStep2 />, <CreateQuizStep3 />];
  return (
    <div className="page_container">
      <div className="page_title">Create quiz {step}</div>
      {steps[step - 1] || null}
    </div>
  );
}

export default QuizCreationPage;
