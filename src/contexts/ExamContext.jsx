import { createContext, useContext, useEffect, useState } from "react";

const ExamContext = createContext();

export const ExamProvider = ({ children }) => {
  const [examState, setExamState] = useState(() => {
    const savedState = localStorage.getItem("examState");
    return savedState
      ? JSON.parse(savedState)
      : {
          isStarted: false,
          isCompleted: false,
          startTime: null,
        };
  });

  useEffect(() => {
    localStorage.setItem("examState", JSON.stringify(examState));
  }, [examState]);

  const startExam = () => {
    setExamState({
      isStarted: true,
      isCompleted: false,
      startTime: Date.now(),
    });
  };

  const endExam = () => {
    setExamState((prev) => ({
      ...prev,
      isCompleted: true,
    }));
    // Clear timer state
    localStorage.removeItem("examTimeLeft");
    localStorage.removeItem("examTimestamp");
    localStorage.removeItem("examTimerPaused");
  };

  const resetExam = () => {
    setExamState({
      isStarted: false,
      isCompleted: false,
      startTime: null,
    });
    // Clear all exam-related localStorage
    localStorage.removeItem("examState");
    localStorage.removeItem("examTimeLeft");
    localStorage.removeItem("examTimestamp");
    localStorage.removeItem("examTimerPaused");
  };

  return (
    <ExamContext.Provider
      value={{
        examState,
        startExam,
        endExam,
        resetExam,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export const useExam = () => useContext(ExamContext);
