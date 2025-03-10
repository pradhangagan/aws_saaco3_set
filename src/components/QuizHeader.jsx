import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import "./QuizHeader.css";

const QuizHeader = () => {
  const [quizState] = useContext(QuizContext);

  return (
    <div className="exam-header">
      <div className="header-left">
        <h1>AWS Certified Solutions Architect - Associate</h1>
        <span className="exam-code">SAA-C03</span>
      </div>

      <div className="header-right">
        <div className="progress-info">
          <span>
            Question {quizState.currentQuestionIndex + 1} of{" "}
            {quizState.questions.length}
          </span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${
                  (quizState.answeredQuestions.size /
                    quizState.questions.length) *
                  100
                }%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;
