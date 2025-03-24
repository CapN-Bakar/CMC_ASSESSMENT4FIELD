import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Admin from "./components/Admin";
import Summary from "./components/Summary";

function SummaryPageWrapper() {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstName, userAnswers, questions, category, mode } =
    location.state || {};

  console.log("✅ SummaryPageWrapper received:", location.state);

  // ✅ Fix: Ensure valid data before rendering Summary
  if (
    !firstName ||
    !Array.isArray(userAnswers) ||
    userAnswers.length === 0 ||
    !Array.isArray(questions) ||
    questions.length === 0 ||
    !mode
  ) {
    console.error("🚨 Invalid data in SummaryPageWrapper! Redirecting...");
    navigate("/", { replace: true });
    return null;
  }

  return (
    <Summary
      firstName={firstName}
      userAnswers={userAnswers}
      questions={questions}
      category={category}
      mode={mode}
      onReset={() => navigate("/")}
    />
  );
}

function AdminPageWrapper() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  console.log("✅ AdminPageWrapper received:", state); // Debugging

  // ✅ Prevent missing state errors
  if (
    !state ||
    !state.firstName ||
    !state.category ||
    state.correctAnswers === undefined ||
    state.totalQuestions === undefined ||
    !Array.isArray(state.userAnswers) ||
    !Array.isArray(state.questions) ||
    state.userAnswers.length === 0 ||
    state.questions.length === 0
  ) {
    console.error("🚨 Missing quiz data in AdminPageWrapper! Redirecting...");
    navigate("/", { replace: true });
    return null;
  }

  return (
    <Admin
      firstName={state.firstName}
      category={state.category}
      correctAnswers={state.correctAnswers}
      totalQuestions={state.totalQuestions}
      percentageCorrect={state.percentageCorrect}
      userAnswers={state.userAnswers}
      questions={state.questions}
    />
  );
}

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/summary" element={<SummaryPageWrapper />} />
          <Route path="/admin" element={<AdminPageWrapper />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
