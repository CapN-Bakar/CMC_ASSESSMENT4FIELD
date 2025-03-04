import { useNavigate, useLocation } from "react-router-dom";
import WebDevResources from "./WebDevResources";
import MobileDevResources from "./MobileDevResources";
import NetworkingAdminResources from "./NetworkingAdminResources";
import SWEPAdminResources from "./SWEPAdminResources";

export default function Admin() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  console.log("✅ Admin received data:", state); // Debugging

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
    return <p>❌ Error: Missing quiz data.</p>;
  }

  const {
    firstName,
    correctAnswers,
    totalQuestions,
    percentageCorrect,
    category,
    userAnswers,
    questions,
  } = state;

  // Function to export data as CSV
  const handleExport = () => {
    const headers = [
      "Name",
      "Category",
      "Correct Answers",
      "Total Questions",
      "Percentage",
    ];
    const data = [
      [
        firstName,
        category,
        correctAnswers,
        totalQuestions,
        `${percentageCorrect}%`,
      ],
    ];

    const csvRows = [
      headers.join(","),
      data.map((row) => row.join(",")).join("\n"),
    ];

    const csvString = csvRows.join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${firstName}_quiz_results.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="admin-page">
      <h1>{firstName}'s Result</h1>
      <p>
        Category: <strong>{category} </strong>
      </p>
      <p>
        Correct Answers: {correctAnswers} / {totalQuestions}
      </p>
      <p>Percentage: {percentageCorrect}%</p>

      {/* ✅ Pass the full quiz data to the learning resources */}
      {category === "Web Development" && (
        <WebDevResources
          userAnswers={userAnswers}
          questions={questions}
          percentage={percentageCorrect}
        />
      )}
      {category === "Mobile Development" && (
        <MobileDevResources
          userAnswers={userAnswers}
          questions={questions}
          percentage={percentageCorrect}
        />
      )}
      {category === "Networking" && (
        <NetworkingAdminResources
          userAnswers={userAnswers}
          questions={questions}
          percentage={percentageCorrect}
        />
      )}
      {category === "Software Engineering Principles" && (
        <SWEPAdminResources
          userAnswers={userAnswers}
          questions={questions}
          percentage={percentageCorrect}
        />
      )}

      {/* ✅ Add Export Button */}
      <button onClick={handleExport}>EXPORT</button>
    </div>
  );
}
