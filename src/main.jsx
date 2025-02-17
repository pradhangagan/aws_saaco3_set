import { createRoot } from "react-dom/client";
import "./index.css";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./contexts/quiz";

createRoot(document.getElementById("root")).render(
  <QuizProvider>
    <Quiz />
  </QuizProvider>
);
