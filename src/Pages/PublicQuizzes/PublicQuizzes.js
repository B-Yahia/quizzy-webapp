import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PublicQuizzes.css";
import PublicQuizCard from "../../Components/Cards/Quiz/PublicQuizCard/PublicQuizCard";

function PublicQuizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const fetchData = (e) => {
    axios
      .get("https://quizsurveyapp-production.up.railway.app/quiz")
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
      <button className="go_home_btn">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          Home Page
        </Link>
      </button>
      {quizzes.map((quiz) => (
        <PublicQuizCard quiz={quiz} key={quiz.id} />
      ))}
    </div>
  );
}

export default PublicQuizzes;
