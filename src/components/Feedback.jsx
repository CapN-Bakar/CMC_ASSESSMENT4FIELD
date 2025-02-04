export default function Feedback({ correctAnswersCount, totalQuestions }) {
  const percentage = Math.round((correctAnswersCount / totalQuestions) * 100);
  let feedbackMessage = "";

  if (percentage === 100) {
    feedbackMessage = "Perfect!";
  } else if (percentage >= 76) {
    feedbackMessage = "You are doing great!";
  } else if (percentage >= 51) {
    feedbackMessage = "You are getting there.";
  } else if (percentage >= 26) {
    feedbackMessage = "A little more practice.";
  } else {
    feedbackMessage = "Need more practice.";
  }

  return (
    <div id="feedback">
      <h3>Feedback</h3>
      <p>{feedbackMessage}</p>
    </div>
  );
}
