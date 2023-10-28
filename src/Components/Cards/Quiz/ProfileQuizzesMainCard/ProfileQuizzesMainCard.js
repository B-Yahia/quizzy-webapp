import React from "react";
import "./ProfileQuizzesMainCard.css";
import { Link } from "react-router-dom";
import Chip3 from "../../../../UI Elements/Chip/Chip3/Chip3";
import ProfileQuizCard from "../ProfileQuizCard/ProfileQuizCard";

function ProfileQuizzesMainCard(props) {
  return (
    <div className="profile_main_card_container">
      <div className="profile_main_card_header">
        {!!props.quizzes && (
          <Chip3 text={"Number of quizzes created :" + props.quizzes.length} />
        )}
        <Link
          to={"/creation"}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <button className="btn2">Create New Quiz</button>
        </Link>
      </div>
      <div className="quizzes_cards">
        {!!props.quizzes &&
          props.quizzes.map((quiz) => (
            <ProfileQuizCard key={quiz.id} quiz={quiz} />
          ))}
      </div>
    </div>
  );
}

export default ProfileQuizzesMainCard;
