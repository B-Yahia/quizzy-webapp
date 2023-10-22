import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginSlice";
import QuizReducer from "./QuizSlice";

export default configureStore({
  reducer: {
    login: LoginReducer,
    quiz: QuizReducer,
  },
});
