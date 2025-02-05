import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FrontPage from "./FrontPage";
import QUESTIONS from "../questions";
import Question from "./Question";

export default function Quiz() {
  const [firstName, setFirstName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();

  const filteredQuestions = QUESTIONS.filter(
    (q) => q.category === selectedCategory
  );

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === filteredQuestions.length;

  const handleSelectAnswer = (answer) => {
    setUserAnswers((prevUserAnswers) => {
      const updatedAnswers = [...prevUserAnswers, answer];

      if (updatedAnswers.length === filteredQuestions.length) {
        console.log("🚀 Navigating to Summary with:", {
          firstName,
          selectedCategory,
          userAnswers: updatedAnswers, // ✅ Confirm that this is NOT empty
          questions: filteredQuestions, // ✅ Ensure this is NOT empty
        });

        setTimeout(() => {
          // ✅ Ensures state updates before navigation
          navigate("/summary", {
            state: {
              firstName,
              category: selectedCategory, // ✅ Ensure category is passed
              userAnswers: updatedAnswers,
              questions: filteredQuestions,
            },
          });
        }, 100); // Small delay to allow state to update
      }

      return updatedAnswers;
    });
  };

  const handleSkipAnswer = () => handleSelectAnswer(null);

  const handleStartQuiz = (name, category) => {
    setFirstName(name);
    setSelectedCategory(category);
  };

  if (!selectedCategory) {
    return <FrontPage onStartQuiz={handleStartQuiz} />;
  }

  return (
    <div id="quiz">
      {!quizIsComplete && (
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          question={filteredQuestions[activeQuestionIndex]}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
        />
      )}
    </div>
  );
}
