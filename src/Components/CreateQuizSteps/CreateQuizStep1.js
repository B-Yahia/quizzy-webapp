import React, { useEffect, useState } from "react";
import quizTopics from "../Data/QuizCategoriesData";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, addTitleAndDesc } from "../../ReduxStrore/QuizSlice";
import "./CreateQuizSteps.css";
import Chip1 from "../../UI Elements/Chip/Chip1/Chip1";
import Chip3 from "../../UI Elements/Chip/Chip3/Chip3";
import { addNotification } from "../../ReduxStrore/NotifSlice";

function CreateQuizStep1() {
  const quiz = useSelector((state) => state.quiz);
  const [title, setTitle] = useState(quiz.title);
  const [description, setDescription] = useState(quiz.description);
  const [tag, setTag] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(quiz.category);
  const [tags, setTags] = useState(quiz.tags);
  const [categories, setCategories] = useState(quizTopics);
  const dispatch = useDispatch();

  const addTagToList = (e) => {
    e.preventDefault();
    if (tag.length > 1) {
      setTags((prevTags) => [...prevTags, tag]);
      setTag("");
    } else {
      dispatch(addNotification("The text field is emplty"));
    }
  };

  const moveToNextStep = (e) => {
    e.preventDefault();
    if (title.length < 5) {
      dispatch(addNotification("Please write a title "));
    } else if (selectedCategory.length === 0) {
      dispatch(addNotification("Select one category"));
    } else if (description.length === 0) {
      dispatch(addNotification("write a description"));
    } else {
      dispatch(nextStep());
      dispatch(addTitleAndDesc({ title, tags, description, selectedCategory }));
    }
  };

  const selectCategory = (e, id) => {
    if (e) e.preventDefault();
    setCategories((prevCategories) => {
      const deselected = prevCategories.map((cat) => {
        return { ...cat, selected: false };
      });
      return deselected.map((cat) => {
        if (cat.id === id) {
          setSelectedCategory(cat.categoryName);
          return { ...cat, selected: true };
        }
        return cat;
      });
    });
  };

  useEffect(() => {
    if (quiz.category) {
      categories.forEach((element) => {
        if (element.categoryName === quiz.category) {
          selectCategory(null, element.id);
        }
      });
    }
  }, []);

  return (
    <div className="quiz_steps_creation_container">
      <div className="quiz_title">
        <label>Title :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="quiz_categories">
        {categories.map((topic) =>
          topic.selected ? (
            <Chip1 key={topic.id} text={topic.categoryName} />
          ) : (
            <span key={topic.id} onClick={(e) => selectCategory(e, topic.id)}>
              <Chip3 text={topic.categoryName} />
            </span>
          )
        )}
      </div>
      <div className="quiz_tags">
        <label>Add tags :</label>
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <button onClick={addTagToList} className="btn1">
          +
        </button>
      </div>
      <div className="tags_display">
        {tags.map((tag, index) => (
          <Chip1 key={index} text={tag} />
        ))}
      </div>
      <div className="quiz_description">
        <label>Description :</label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="next_btn">
        <button className="btn1" onClick={moveToNextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CreateQuizStep1;
