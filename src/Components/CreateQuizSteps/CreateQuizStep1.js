import React, { useState } from "react";
import quizTopics from "../Data/QuizCategoriesData";
import { useDispatch } from "react-redux";
import { nextStep, addTitleAndDesc } from "../../ReduxStrore/QuizSlice";
import "./CreateQuizSteps.css";

function CreateQuizStep1() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState(quizTopics);
  const dispatch = useDispatch();

  const addTagToList = (e) => {
    e.preventDefault();
    if (tag.length > 1) {
      setTags((prevTags) => [...prevTags, tag]);
      setTag("");
    } else {
      console.log("make sure that the input is not empty");
    }
  };

  const moveToNextStep = (e) => {
    e.preventDefault();
    dispatch(nextStep());
    dispatch(addTitleAndDesc({ title, tags, description, selectedCategory }));
  };

  const selectCategory = (e, id) => {
    e.preventDefault();
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
            <div key={topic.id} className="quiz_category color_active">
              <p>{topic.categoryName}</p>
            </div>
          ) : (
            <div
              key={topic.id}
              className="quiz_category"
              onClick={(e) => selectCategory(e, topic.id)}
            >
              <p>{topic.categoryName}</p>
            </div>
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
        <button onClick={addTagToList} className="reusable_btn">
          +
        </button>
      </div>
      <div className="tags_display">
        {tags.map((tag, index) => (
          <div key={index} className="single_tag_display">
            <p>{tag}</p>
          </div>
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
        <button className="reusable_btn" onClick={moveToNextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CreateQuizStep1;
