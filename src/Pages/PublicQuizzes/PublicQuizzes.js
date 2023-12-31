import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PublicQuizzes.css";
import PublicQuizCard from "../../Components/Cards/Quiz/PublicQuizCard/PublicQuizCard";
import { addNotification } from "../../ReduxStrore/NotifSlice";
import { useDispatch } from "react-redux";

function PublicQuizzes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quizzes, setQuizzes] = useState([]);
  const fetchData = useCallback(
    (e) => {
      if (e) e.preventDefault();
      axios
        .get("https://quizsurveyapp-production.up.railway.app/quiz")
        .then((resp) => {
          setQuizzes(resp.data);
        })
        .catch((error) => {
          console.log(error);
          dispatch(addNotification("something when wrong"));
          navigate("/error");
        });
    },
    [dispatch, navigate]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);
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
