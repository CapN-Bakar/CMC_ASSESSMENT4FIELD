import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Admin() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract state
  const state = location.state;

  console.log("State received in admin:", state); // Debugging

  useEffect(() => {
    if (
      !state ||
      !state.firstName ||
      state.correctAnswers === undefined ||
      state.totalQuestions === undefined
    ) {
      console.log("Redirecting to home due to missing state.");
      navigate("/", { replace: true });
    }
  }, [state, navigate]);

  if (!state) {
    return <p>Redirecting...</p>;
  }

  // Destructure state (use optional chaining to avoid errors)
  const {
    firstName,
    correctAnswers,
    totalQuestions,
    percentageCorrect,
    category,
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

      {/* Add the Export Button */}
      <button onClick={handleExport}>EXPORT</button>
    </div>
  );
}
