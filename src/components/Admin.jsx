import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import FeedbackAdmin from "./FeedbackAdmin"; // ✅ Import the new component

export default function Admin() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state;
  console.log("State received in admin:", state);

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

  const {
    firstName,
    correctAnswers,
    totalQuestions,
    percentageCorrect,
    category,
  } = state;

  // ✅ Function to export data as CSV
  const handleExport = () => {
    const headers = [
      "Name",
      "Category",
      "Correct Answers",
      "Total Questions",
      "Percentage",
      "Feedback",
    ];
    const data = [
      [
        firstName,
        category,
        correctAnswers,
        totalQuestions,
        `${percentageCorrect}%`,
        getFeedbackMessage(category, percentageCorrect), // ✅ Get feedback for CSV
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
        Category: <strong>{category}</strong>
      </p>
      <p>
        Correct Answers: {correctAnswers} / {totalQuestions}
      </p>
      <p>Percentage: {percentageCorrect}%</p>

      {/* ✅ Display Category-Based Feedback */}
      <FeedbackAdmin category={category} percentage={percentageCorrect} />

      {/* ✅ Add the Export Button */}
      <button onClick={handleExport}>EXPORT</button>
    </div>
  );
}

// ✅ Function to get feedback for CSV export
const getFeedbackMessage = (category, percentage) => {
  const feedbacks = {
    "Web Development": {
      0: "Nice try!",
      21: "Good try!",
      51: "Awesome!",
      76: "Fantastic!",
    },
    "Mobile Development": {
      0: "Meh...",
      21: "So-so.",
      51: "Cool, I guess.",
      76: "Finally!",
    },
    Networking: {
      0: "Keep going!",
      21: "Not bad!",
      51: "Well done!",
      76: "Excellent!",
    },
    "Software Engineering Principles": {
      0: "Try harder!",
      21: "You're learning!",
      51: "Impressive!",
      76: "Outstanding!",
    },
  };

  const thresholds = [76, 51, 21, 0];
  for (let threshold of thresholds) {
    if (percentage >= threshold) {
      return feedbacks[category][threshold] || "Great job!";
    }
  }
};
