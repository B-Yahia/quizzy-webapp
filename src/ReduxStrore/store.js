import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginSlice";
import QuizReducer from "./QuizSlice";
import NotifReducer from "./NotifSlice";

export default configureStore({
  reducer: {
    login: LoginReducer,
    quiz: QuizReducer,
    notifications: NotifReducer,
  },
});
