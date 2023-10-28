import React from "react";
import TextContainer1 from "../../../../UI Elements/TextContainer/TextContainer1/TextContainer1";
import TextContainer2 from "../../../../UI Elements/TextContainer/TextContainer2/TextContainer2";
import Chip2 from "../../../../UI Elements/Chip/Chip2/Chip2";
import "./SingleQuizInfoCard.css";
import Chip1 from "../../../../UI Elements/Chip/Chip1/Chip1";
import Chip3 from "../../../../UI Elements/Chip/Chip3/Chip3";

function SingleQuizInfoCard(props) {
  return (
    <div className="single_quiz_info_card_container">
      <TextContainer1 text={"Title : " + props.quiz.title} />
      <TextContainer2 text={"Description : " + props.quiz.description} />
      <div className="single_quiz_info_card_numbers">
        <Chip3 text={"Category : " + props.quiz.category} />
        <Chip2 text={"Number of questions : " + props.quiz.questions.length} />
        <Chip2
          text={
            "Number of participants : " + props.quiz.participationList.length
          }
        />
      </div>

      <div className="single_quiz_info_card_tags">
        <Chip1 text="Tags :" />
        {props.quiz.tags.map((tag, index) => (
          <Chip1 text={tag} key={index} />
        ))}
      </div>
    </div>
  );
}

export default SingleQuizInfoCard;
