import { createSlice } from "@reduxjs/toolkit";

const QuizSlice = createSlice({
  name: "quiz",
  initialState: {
    description: "",
    category: "",
    questions: [],
    tags: [],
    title: "",
    publicized: true,
    available: true,
    step: 1,
  },
  reducers: {
    nextStep(state) {
      state.step++;
    },
    previousStep(state) {
      state.step--;
    },
    addTitleAndDesc(state, action) {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.category = action.payload.selectedCategory;
      state.tags = action.payload.tags;
    },
    addQuestion(state, action) {
      const newQuestion = {
        statement: action.payload.newQuestion.statement,
        answers: action.payload.newQuestion.answers,
      };

      state.questions.push(newQuestion);
    },
    removeQuestion(state, action) {
      state.questions.splice(action.payload.index, 1);
    },
    EditAnswerfromQuestion(state, action) {
      const index = action.payload.QId;

      const updatedQuestion = {
        statement: action.payload.newQuestion.statement,
        answers: action.payload.newQuestion.answers,
      };
      state.questions.splice(index, 1, updatedQuestion);
    },
    cleanQuizEntity(state) {
      state.tite = "";
      state.description = "";
      state.category = "";
      state.questions = [];
      state.step = 1;
    },
  },
});

export const {
  nextStep,
  previousStep,
  addQuestion,
  addTitleAndDesc,
  removeQuestion,
  EditAnswerfromQuestion,
  cleanQuizEntity,
} = QuizSlice.actions;
export default QuizSlice.reducer;
