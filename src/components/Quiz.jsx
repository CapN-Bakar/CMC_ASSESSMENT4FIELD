import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FrontPage from "./FrontPage";
import QUESTIONS from "../questions";
import Question from "./Question";

export default function Quiz() {
  const [firstName, setFirstName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMode, setSelectedMode] = useState(""); // ✅ Added Mode of Assessment
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
        const modeToPass = selectedMode; // ✅ Store mode in a variable

        console.log("🚀 Navigating to Summary with:", {
          firstName,
          selectedCategory,
          mode: modeToPass, // ✅ Mode should be correctly stored
          userAnswers: updatedAnswers,
          questions: filteredQuestions,
        });

        setTimeout(() => {
          navigate("/summary", {
            state: {
              firstName,
              mode: modeToPass, // ✅ Pass stored mode
              category: selectedCategory,
              userAnswers: updatedAnswers,
              questions: filteredQuestions,
            },
          });
        }, 100);
      }

      return updatedAnswers;
    });
  };

  const handleSkipAnswer = () => handleSelectAnswer(null);

  const handleStartQuiz = (name, category, mode) => {
    setFirstName(name);
    setSelectedCategory(category);
    setSelectedMode(mode); // ✅ Store Mode of Assessment
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
