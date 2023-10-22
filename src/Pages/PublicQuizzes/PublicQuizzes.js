import axios from "axios";
import React, { useEffect, useState } from "react";
import QuizInfoCard from "../../Components/QuizInfoCard/QuizInfoCard";

function PublicQuizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const fetchData = (e) => {
    axios
      .get("http://localhost:8080/quiz")
      .then((resp) => {
        setQuizzes(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="page_container">
      <h1 className="page_title">Public Quizzes</h1>
      <p>
        Here you can find quizzes that are open for everyone to take. These will
        be updated regularly with new content.
      </p>
      {quizzes.map((quiz) => (
        <QuizInfoCard quiz={quiz} key={quiz.id} />
      ))}
    </div>
  );
}

export default PublicQuizzes;
