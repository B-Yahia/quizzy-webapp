import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import QuizCreationPage from "./Pages/QuizCreationPage/QuizCreationPage";
import PublicQuizzes from "./Pages/PublicQuizzes/PublicQuizzes";
import QuizPage from "./Pages/QuizPage/QuizPage";
import Notification from "./Components/Notification/Notification";

function App() {
  return (
    <div className="App">
      <div className="app_container">
        <Routes>
          <Route path="/" element={<HomePage />} />
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
