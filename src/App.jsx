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
  const { firstName, userAnswers, questions, category } = location.state || {};

  console.log("SummaryPageWrapper received:", location.state); // ✅ Debugging

  // ✅ Fix: Ensure valid data before redirecting
  if (
    !firstName ||
    !Array.isArray(userAnswers) ||
    userAnswers.length === 0 ||
    !Array.isArray(questions) ||
    questions.length === 0
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
      onReset={() => navigate("/")}
    />
  );
}

function AdminPageWrapper() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  if (
    !state ||
    !state.firstName ||
    state.correctAnswers === undefined ||
    state.totalQuestions === undefined
  ) {
    navigate("/");
    return null;
  }

  return (
    <Admin
      firstName={state.firstName}
      correctAnswersCount={state.correctAnswers}
      totalQuestions={state.totalQuestions}
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
