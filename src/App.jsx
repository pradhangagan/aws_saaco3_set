import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div>
      <h1>Welcome to the AWS SAA CO3 Practice Set</h1>
      <p>Click the button below to start the quiz.</p>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default App;
