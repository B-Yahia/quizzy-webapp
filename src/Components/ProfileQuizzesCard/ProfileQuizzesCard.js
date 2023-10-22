import React from "react";
import "./ProfileQuizzesCard.css";
import ProfileQuestionCard from "../ProfileQuestionCard/ProfileQuestionCard";
import { Link } from "react-router-dom";

function ProfileQuizzesCard(props) {
  return (
    <div className="quiz_card_container">
      <div className="quiz_card_header">
        {!!props.quizzes && <p>number of quizzes {props.quizzes.length}</p>}
        <Link
          to={"/creation"}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <button className="reusable_btn">create new quiz</button>
        </Link>
      </div>

      <div className="quiz_info_container">
        {!!props.quizzes &&
          props.quizzes.map((quiz) => (
            <div key={quiz.id} className="quiz_info_card_question">
              <div key={quiz.id} className="quiz_info_card">
                <div
                  className="bg_tag_opacity"
                  style={{ opacity: "0.3" }}
                ></div>

                <div className="quiz_info_card_btn">
                  <button className="reusable_btn">{">"}</button>
                </div>

                <p>{quiz.title}</p>
                <p>Number of questions : {quiz.questions.length}</p>
                <div className="quiz_info_card_tags ">
                  <div>Tags :</div>
                  <div>
                    {quiz.tags.map((tag, index) => (
                      <p key={index}>{tag}</p>
                    ))}
                  </div>
                </div>
              </div>

              <ProfileQuestionCard questions={quiz.questions} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProfileQuizzesCard;
