export default function WebDevResources({ percentage }) {
  let resources = {
    learningMaterials: [],
    miniProject: "",
  };

  if (percentage <= 37.5) {
    // Beginner Level (0-3 correct)
    resources.learningMaterials = [
      {
        title: "W3Schools - React Basics",
        link: "https://www.w3schools.com/react/",
      },
      {
        title: "React Official Docs - Getting Started",
        link: "https://react.dev/learn",
      },
      {
        title: "FreeCodeCamp - React Course",
        link: "https://www.freecodecamp.org/news/learn-react-in-90-minutes/",
      },
      {
        title: "Traversy Media - React Crash Course (YouTube)",
        link: "https://youtu.be/w7ejDZ8SWv8",
      },
    ];
    resources.miniProject =
      "Build a simple static webpage using React components.";
  } else if (percentage <= 62.5) {
    // Intermediate Level (4-5 correct)
    resources.learningMaterials = [
      {
        title: "React Docs - State & Lifecycle",
        link: "https://react.dev/reference/react/Component#state-and-lifecycle",
      },
      {
        title: "React Beta Docs - Hooks Overview",
        link: "https://react.dev/reference/react/hooks",
      },
      {
        title: "Scrimba - Learn React for Free",
        link: "https://scrimba.com/learn/learnreact",
      },
      {
        title: "JavaScript.info - React Intro",
        link: "https://javascript.info/react",
      },
    ];
    resources.miniProject =
      "Build a Todo App with local state and lifecycle methods.";
  } else if (percentage <= 87.5) {
    // Advanced Intermediate (6-7 correct)
    resources.learningMaterials = [
      {
        title: "React Docs - Performance Optimization",
        link: "https://react.dev/learn/optimizing-performance",
      },
      {
        title: "Kent C. Dodds - Advanced React Patterns",
        link: "https://epicreact.dev/",
      },
      {
        title: "Redux Toolkit - Modern State Management",
        link: "https://redux-toolkit.js.org/",
      },
      {
        title: "React Query - Managing Server State",
        link: "https://tanstack.com/query/latest/docs/react/overview",
      },
    ];
    resources.miniProject =
      "Create a Weather App using an API and implement caching with React Query.";
  } else {
    // Expert Level (8 correct)
    resources.learningMaterials = [
      { title: "React Official Docs - Deep Dive", link: "https://react.dev/" },
      {
        title: "React Query - Managing Server State",
        link: "https://tanstack.com/query/latest/docs/react/overview",
      },
      {
        title: "Next.js - Server Components & SSR",
        link: "https://nextjs.org/docs/getting-started",
      },
      {
        title: "React Testing Library",
        link: "https://testing-library.com/docs/react-testing-library/intro/",
      },
    ];
    resources.miniProject =
      "Develop a Full-Stack Social Media App with authentication, real-time updates, and server-side rendering.";
  }

  return (
    <div id="web-dev-resources">
      <h3>📚 Recommended Learning Materials</h3>
      <ul>
        {resources.learningMaterials.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <h3>💡 Recommended Mini-Project</h3>
      <p>{resources.miniProject}</p>
    </div>
  );
}
