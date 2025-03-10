import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ExamHeader from "./ExamHeader";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";
import "./Quiz.css";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const navigate = useNavigate();

  const handleRestart = () => {
    dispatch({ type: "RESTART" });
    navigate("/");
  };

  // Calculate unanswered questions
  const unansweredCount =
    quizState.questions.length -
    quizState.previousAnswers.filter((answer) => answer !== undefined).length;

  return (
    <div className="quiz-container">
      <ExamHeader
        currentQuestion={quizState.currentQuestionIndex + 1}
        totalQuestions={quizState.questions.length}
      />

      {quizState.showResults ? (
        <div className="results-container">
          <div className="results-header">
            <h2>Quiz Results</h2>
            <div className="score-circle">
              <div className="score-number">
                {(
                  (quizState.correctAnswerCount / quizState.questions.length) *
                  100
                ).toFixed(0)}
                %
              </div>
              <div className="score-label">Score</div>
            </div>
          </div>

          <div className="results-details">
            <div className="results-item">
              <span className="results-label">Correct Answers:</span>
              <span className="results-value">
                {quizState.correctAnswerCount}
              </span>
            </div>
            <div className="results-item">
              <span className="results-label">Total Questions:</span>
              <span className="results-value">
                {quizState.questions.length}
              </span>
            </div>
          </div>

          <button className="restart-button" onClick={handleRestart}>
            Try Again
          </button>
        </div>
      ) : (
        <div className="quiz-content">
          <div className="quiz-header">
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{
                  width: `${
                    ((quizState.currentQuestionIndex + 1) /
                      quizState.questions.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>
            <div className="quiz-info">
              <div className="question-counter">
                Question {quizState.currentQuestionIndex + 1}/
                {quizState.questions.length}
              </div>
              {unansweredCount > 0 && (
                <div className="unanswered-counter">
                  Unanswered: {unansweredCount}
                </div>
              )}
            </div>
          </div>

          <Question />

          <div className="navigation-wrapper">
            <div className="navigation-buttons">
              <button
                className={`nav-button prev-button ${
                  quizState.currentQuestionIndex === 0 ? "disabled" : ""
                }`}
                onClick={() => dispatch({ type: "PREVIOUS_QUESTION" })}
                disabled={quizState.currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                className="nav-button next-button"
                onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              >
                {quizState.currentQuestionIndex ===
                quizState.questions.length - 1
                  ? unansweredCount > 0
                    ? "Review"
                    : "Finish"
                  : "Next"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
