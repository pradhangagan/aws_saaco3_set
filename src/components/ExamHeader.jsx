import Timer from "./Timer";
import "./ExamHeader.css";

const ExamHeader = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className="exam-header">
      <div className="exam-info">
        <h1 className="exam-title">
          AWS Certified Solutions Architect - Associate
        </h1>
        <span className="exam-code">SAA-C03</span>
      </div>

      <div className="exam-status">
        <div className="question-progress">
          Question {currentQuestion} of {totalQuestions}
        </div>
        <Timer />
      </div>
    </div>
  );
};

export default ExamHeader;
