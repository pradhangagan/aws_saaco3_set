import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const navigate = useNavigate();
  console.log("quizState", quizState);
  const percentage =
    (quizState.correctAnswerCount / quizState.questions.length) * 100;

  const handleRestart = () => {
    dispatch({ type: "RESTART" });
    navigate("/");
  };

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You have got {quizState.correctAnswerCount} of{" "}
              {quizState.questions.length}
            </div>
            <div>Percentage: {percentage.toFixed(2)}</div>
          </div>
          <div className="next-button" onClick={handleRestart}>
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
