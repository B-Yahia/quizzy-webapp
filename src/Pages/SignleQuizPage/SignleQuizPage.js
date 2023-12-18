import React, { useCallback, useEffect, useState } from "react";
import TextContainer1 from "../../UI Elements/TextContainer/TextContainer1/TextContainer1";
import "./SignleQuizPage.css";
import TextContainer2 from "../../UI Elements/TextContainer/TextContainer2/TextContainer2";
import Chip1 from "../../UI Elements/Chip/Chip1/Chip1";
import Chip2 from "../../UI Elements/Chip/Chip2/Chip2";
import BasicQuestionCard from "../../Components/Cards/Question/BasicQuestionCard/BasicQuestionCard";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNotification } from "../../ReduxStrore/NotifSlice";

function SignleQuizPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const [quiz, setQuiz] = useState();

  const fetchData = useCallback(async () => {
    const url =
      "https://quizsurveyapp-production.up.railway.app/quiz/" + params.id;
    axios
      .get(url)
      .then((resp) => {
        console.log(resp);
        setQuiz(resp.data);
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch(addNotification("Something went wrong"));
      });
  }, [params, dispatch]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="page_container">
      <button>
        <Link
          to={"/profile"}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          Back to profile
        </Link>
      </button>
      {quiz ? (
        <>
          <div className="single_quiz_page_container">
            <TextContainer1 text={quiz.title} />
            <TextContainer2 text={quiz.description} />
            <div className="single_quiz_row">
              <Chip2 text={quiz.category} />
            </div>
            <div className="single_quiz_row">
              <Chip1 text="Tags :" />
              {quiz.tags.map((tag, index) => (
                <Chip1 key={index} text={tag} />
              ))}
            </div>
            {quiz.questions.map((question) => (
              <BasicQuestionCard question={question} />
            ))}
          </div>
        </>
      ) : (
        <Chip1 text="Loading" />
      )}
    </div>
  );
}

export default SignleQuizPage;
