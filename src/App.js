import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import QuizCreationPage from "./Pages/QuizCreationPage/QuizCreationPage";
import PublicQuizzes from "./Pages/PublicQuizzes/PublicQuizzes";
import QuizPage from "./Pages/QuizPage/QuizPage";
import Notification from "./Components/Notification/Notification";
import SignleQuizPage from "./Pages/SignleQuizPage/SignleQuizPage";
import ParticipationsPage from "./Pages/ParticipationsPage/ParticipationsPage";
import LoginComponent from "./Components/LoginComponent/LoginComponent";
import SignupComponent from "./Components/SignupComponent/SignupComponent";

function App() {
  return (
    <div className="App">
      <div className="app_container">
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
          </Route>
          <Route path="/profile/quiz/:id" element={<SignleQuizPage />} />
          <Route
            path="/profile/participations/:id"
            element={<ParticipationsPage />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/creation" element={<QuizCreationPage />} />
          <Route path="/public" element={<PublicQuizzes />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Notification />
      </div>
    </div>
  );
}

export default App;
