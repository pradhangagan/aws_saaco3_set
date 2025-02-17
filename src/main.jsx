import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./contexts/quiz";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <QuizProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  </QuizProvider>
);
