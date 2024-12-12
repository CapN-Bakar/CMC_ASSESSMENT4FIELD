/*import { useCallback, useState } from "react";

import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
} */

import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]); // To store user's answers
  const [selectedAnswer, setSelectedAnswer] = useState(null); // To track the current selected answer
  const [canProceed, setCanProceed] = useState(false); // Control enabling/disabling of the Next button

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((answer) => {
    setSelectedAnswer(answer); // Set selected answer when an answer is chosen
    setCanProceed(true); // Enable the Next button
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null); // Skip by setting the selected answer to null
    setCanProceed(true); // Enable the Next button
  }, [handleSelectAnswer]);

  const handleNextQuestion = () => {
    setUserAnswers((prevUserAnswers) => [
      ...prevUserAnswers,
      selectedAnswer, // Add the selected answer to the answers array
    ]);
    setSelectedAnswer(null); // Reset the selected answer for the next question
    setCanProceed(false); // Disable the Next button until the next answer is selected
  };

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
      <button
        onClick={handleNextQuestion}
        disabled={!canProceed} // Only enable Next button if an answer is selected
      >
        Next
      </button>
    </div>
  );
}
