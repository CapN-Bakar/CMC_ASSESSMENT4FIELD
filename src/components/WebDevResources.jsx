export default function WebDevResources({
  userAnswers = [],
  questions = [],
  percentage,
}) {
  console.log("📌 WebDevResources Received Data:", {
    userAnswers,
    questions,
    percentage,
  });

  // Ensure questions exist before running forEach
  if (!questions.length || !userAnswers.length) {
    return <p>❌ Error: Missing quiz data.</p>;
  }

  let learningMaterials = new Set();
  let miniProject = "";

  questions.forEach((question, index) => {
    if (userAnswers[index] !== question.answers[0]) {
      switch (question.id) {
        case "wd1":
          learningMaterials.add({
            name: "React Lifecycle Methods - Official Docs",
            url: "https://react.dev/reference/react/Component#componentdidmount",
          });
          break;
        case "wd2":
          learningMaterials.add({
            name: "Mastering React Hooks",
            url: "https://www.freecodecamp.org/news/react-hooks-tutorial/",
          });
          break;
        case "wd3":
          learningMaterials.add({
            name: "State Management in React (useState vs Redux vs Context API)",
            url: "https://www.smashingmagazine.com/2020/06/state-management-react/",
          });
          break;
        case "wd4":
          learningMaterials.add({
            name: "Understanding the Virtual DOM",
            url: "https://react.dev/learn/render-and-commit",
          });
          break;
        case "wd5":
          learningMaterials.add({
            name: "React List Keys & Best Practices",
            url: "https://beta.reactjs.org/learn/rendering-lists",
          });
          break;
        case "wd6":
          learningMaterials.add({
            name: "Props vs State in React",
            url: "https://react.dev/learn/passing-props-to-a-component",
          });
          break;
        case "wd7":
          learningMaterials.add({
            name: "Setting up a React Project - CRA & Vite",
            url: "https://www.freecodecamp.org/news/how-to-set-up-a-react-project-with-vite/",
          });
          break;
        case "wd8":
          learningMaterials.add({
            name: "React Context API vs Redux",
            url: "https://daveceddia.com/context-api-vs-redux/",
          });
          break;
        default:
          break;
      }
    }
  });

  // Set a mini-project based on performance
  if (percentage <= 37.5) {
    miniProject = "💡 Build a simple static webpage using React components.";
  } else if (percentage <= 62.5) {
    miniProject = "💡 Build a Todo App with local state and lifecycle methods.";
  } else if (percentage <= 87.5) {
    miniProject =
      "💡 Create a Weather App using an API and implement caching with React Query.";
  } else {
    miniProject =
      "💡 Develop a Full-Stack Social Media App with authentication, real-time updates, and server-side rendering.";
  }

  return (
    <div id="resources-container">
      <h3>📚 Recommended Learning Materials</h3>
      {learningMaterials.size > 0 ? (
        <div className="resource-list">
          {[...learningMaterials].map((material, index) => (
            <div key={index} className="resource-item">
              <a href={material.url} target="_blank" rel="noopener noreferrer">
                {material.name}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>✅ The student has demonstrated proficiency in all areas.</p>
      )}

      <h3>💡 Mini-Project</h3>
      <p>{miniProject}</p>
    </div>
  );
}
