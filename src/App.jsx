import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div className="app-container">
      <div className="welcome-card">
        <h1>AWS Solutions Architect Associate</h1>
        <h2>Practice Exam (SAA-C03)</h2>

        <div className="exam-info">
          <div className="info-item">
            <span className="info-label">Questions:</span>
            <span className="info-value">65</span>
          </div>
          <div className="info-item">
            <span className="info-label">Time Limit:</span>
            <span className="info-value">130 mins</span>
          </div>
          <div className="info-item">
            <span className="info-label">Passing Score:</span>
            <span className="info-value">720/1000</span>
          </div>
        </div>

        <div className="domains-section">
          <h3>Exam Domains</h3>
          <ul className="domains-list">
            <li>Design Secure Architectures (30%)</li>
            <li>Design Resilient Architectures (26%)</li>
            <li>Design High-Performance Architectures (24%)</li>
            <li>Design Cost-Optimized Architectures (20%)</li>
          </ul>
        </div>

        <button className="start-button" onClick={handleStart}>
          Start Practice Exam
        </button>

        <div className="exam-tips">
          <p>💡 Tips:</p>
          <ul>
            <li>Read each question carefully</li>
            <li>Review all options before selecting an answer</li>
            <li>Flag questions you're unsure about for review</li>
            <li>Manage your time effectively</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
