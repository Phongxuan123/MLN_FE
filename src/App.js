import { Routes, Route, Navigate } from "react-router-dom";

import HomePages from "./pages/HomePages";
import Flashcards from "./pages/Flashcards";
import DebateCorner from "./pages/DebateCorner";
import Quiz from "./pages/Quiz";
import Lesson from "./pages/Lesson";

/* QUIZ PAGES */
import MatchingQuiz from "./pages/MatchingQuiz";
import AnalysisQuiz from "./pages/AnalysisQuiz";
import EssayQuiz from "./pages/EssayQuiz";
import ImageQuiz from "./pages/ImageQuiz";
import MCQQuiz from "./pages/MCQQuiz";
import FlashcardDetail from "./pages/FlashcardDetail";
function App() {
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/home" />} />

      {/* Main Pages */}
      <Route path="/home" element={<HomePages />} />
      <Route path="/flashcards" element={<Flashcards />} />
      <Route path="/debate" element={<DebateCorner />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/lessons" element={<Lesson />} />
      <Route
  path="/flashcards/:id"
  element={<FlashcardDetail />}
/>
      {/* Quiz Pages */}
      <Route
        path="/quiz/matching"
        element={<MatchingQuiz />}
      />

      <Route
        path="/quiz/analysis"
        element={<AnalysisQuiz />}
      />

      <Route
        path="/quiz/essay"
        element={<EssayQuiz />}
      />

      <Route
        path="/image-quiz"
        element={<ImageQuiz />}
      />

      <Route
        path="/quiz/mcq"
        element={<MCQQuiz />}
      />
    </Routes>
    

    
  );
}

export default App;