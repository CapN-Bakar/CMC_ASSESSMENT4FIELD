import { useState } from "react";
import FrontPage from "./FrontPage";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [firstName, setFirstName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const filteredQuestions = QUESTIONS.filter(
    (q) => q.category === selectedCategory
  );

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === filteredQuestions.length;

  const handleSelectAnswer = (answer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);
  };

  const handleSkipAnswer = () => handleSelectAnswer(null);

  const handleStartQuiz = (name, category) => {
    setFirstName(name);
    setSelectedCategory(category);
  };

  if (!selectedCategory) {
    return <FrontPage onStartQuiz={handleStartQuiz} />;
  }

  if (quizIsComplete) {
    return (
      <Summary
        firstName={firstName}
        userAnswers={userAnswers}
        questions={filteredQuestions}
        onReset={() => {
          setFirstName("");
          setSelectedCategory("");
          setUserAnswers([]);
        }}
      />
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        question={filteredQuestions[activeQuestionIndex]}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
