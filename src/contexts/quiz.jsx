import { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helper";

const initialState = {
  currentQuestionIndex: 0,
  questions: questions,
  showResults: false,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: "",
  correctAnswerCount: 0,
  previousAnswers: [],
};

const reducer = (state, action) => {
  // console.log("reducer", state, action);
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswerCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;

      const newPreviousAnswers = [...state.previousAnswers];
      newPreviousAnswers[state.currentQuestionIndex] = action.payload;

      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount,
        previousAnswers: newPreviousAnswers,
      };
    }

    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;

      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);

      const currentAnswer = state.previousAnswers[currentQuestionIndex] || "";

      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer,
      };
    }

    case "PREVIOUS_QUESTION": {
      if (state.currentQuestionIndex === 0) return state;

      const currentQuestionIndex = state.currentQuestionIndex - 1;
      const answers = shuffleAnswers(state.questions[currentQuestionIndex]);

      const currentAnswer = state.previousAnswers[currentQuestionIndex] || "";

      return {
        ...state,
        currentQuestionIndex,
        showResults: false,
        answers,
        currentAnswer,
      };
    }

    case "RESTART": {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  // console.log("state", value);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
