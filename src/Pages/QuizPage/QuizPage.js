import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubmissionForm from "../../Components/SubmissionForm/SubmissionForm";
import TextContainer1 from "../../UI Elements/TextContainer/TextContainer1/TextContainer1";
import "./QuizPage.css";

function QuizPage() {
  const [quiz, setQuiz] = useState();
  const [step, setStep] = useState(0);
  const [quizAnswersList, setQuizAnswersList] = useState([]);
  const [optionsList, setOptionsList] = useState([]);

  const params = useParams();

  const handleAnswerSelect = (id) => {
    optionsList.push(id);
    nextQuestion();
  };
  const addOptiontoAnswers = (id) => {
    if (optionsList.includes(id)) {
      setOptionsList((op) => op.filter((opt) => opt !== id));
    } else {
      setOptionsList((op) => [...op, id]);
    }
  };
  const nextQuestion = () => {
    const QuestionResponse = {
      selectedAnswerIds: optionsList,
      questionDTO: quiz.questions[step],
    };
    setQuizAnswersList((items) => [...items, QuestionResponse]);
    setOptionsList([]);
    setStep(step + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      let url = "http://localhost:8080/quiz/" + params.id;
      axios
        .get(url)
        .then((response) => {
          setQuiz(response.data);
        })
        .then((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [params.id]);
  return (
    <div className="page_container">
      <h1>Quiz Page</h1>

      {!!quiz && (
        <div className="card_ask_question_container">
          <TextContainer1 text={quiz.title} />
          {step === quiz.questions.length ? (
            <SubmissionForm
              questionResponseList={quizAnswersList}
              quizId={quiz.id}
            />
          ) : (
            <div className="card_ask_question">
              <p>{quiz.questions[step].statement}</p>
              <div className="card_ask_question_answers">
                {quiz.questions[step].numberOfCorrectAnswers === 1 ? (
                  quiz.questions[step].answers.map((answer) => (
                    <label key={answer.id}>
                      <input
                        type="radio"
                        name={quiz.questions[step].statement}
                        value={answer.statement}
                        onClick={() => handleAnswerSelect(answer.id)}
                      />
                      {answer.statement}
                    </label>
                  ))
                ) : (
                  <div className="card_ask_question_answers">
                    {quiz.questions[step].answers.map((answer) => (
                      <label key={answer.id}>
                        <input
                          type="checkbox"
                          name={quiz.questions[step].statement}
                          value={answer.statement}
                          onClick={() => addOptiontoAnswers(answer.id)}
                        />
                        {answer.statement}
                      </label>
                    ))}
                    <button onClick={nextQuestion} className="btn1">
                      Submit answer
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizPage;
