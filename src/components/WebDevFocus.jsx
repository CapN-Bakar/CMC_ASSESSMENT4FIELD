export default function WebDevFocus({ userAnswers = [], questions = [] }) {
  console.log("📌 WebDevFocus Received Data:", { userAnswers, questions });

  if (
    !Array.isArray(userAnswers) ||
    !Array.isArray(questions) ||
    userAnswers.length === 0 ||
    questions.length === 0
  ) {
    return <p>❌ Error: Missing data in WebDevFocus.</p>;
  }

  const focusAreas = new Set();

  questions.forEach((question, index) => {
    if (userAnswers[index] !== question.answers[0]) {
      switch (question.id) {
        case "wd1":
          focusAreas.add(
            "Learn about React Lifecycle Methods (componentDidMount, componentDidUpdate)."
          );
          break;
        case "wd2":
          focusAreas.add(
            "Deep dive into React Hooks - useState and useEffect."
          );
          break;
        case "wd3":
          focusAreas.add(
            "Understand proper state management and best practices in React."
          );
          break;
        case "wd4":
          focusAreas.add(
            "Explore how the Virtual DOM works and why React uses it."
          );
          break;
        case "wd5":
          focusAreas.add("Learn about the importance of keys in React lists.");
          break;
        case "wd6":
          focusAreas.add(
            "Review how props work and how data flows in React components."
          );
          break;
        case "wd7":
          focusAreas.add(
            "Master React project setup using Create React App (CRA) and Vite."
          );
          break;
        case "wd8":
          focusAreas.add(
            "Understand the React Context API and how to avoid prop drilling."
          );
          break;
        default:
          break;
      }
    }
  });

  return (
    <div id="webdev-focus-areas">
      <h2>🎯 Areas to Focus On</h2>
      {focusAreas.size > 0 ? (
        <div className="focus-list">
          {[...focusAreas].map((area, index) => (
            <div key={index} className="focus-item">
              {area}
            </div>
          ))}
        </div>
      ) : (
        <p>✅ Great job! You have a strong understanding of React concepts.</p>
      )}
    </div>
  );
}
