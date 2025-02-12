export default function FeedbackAdmin({ category, percentage }) {
  if (!category)
    return (
      <p>
        <strong>Feedback:</strong> No category selected.
      </p>
    );

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

  const thresholds = [76, 51, 21, 0]; // Highest to lowest
  let feedbackMessage = "Great job!";

  for (let threshold of thresholds) {
    if (percentage >= threshold) {
      feedbackMessage = feedbacks[category][threshold] || "Great job!";
      break;
    }
  }

  return (
    <p>
      <strong>Feedback:</strong> {feedbackMessage}
    </p>
  );
}
