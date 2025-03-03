export default function WebDevFocus({ percentage }) {
  let focusPoints = [];

  if (percentage <= 37.5) {
    // Beginner Level (0-3 correct)
    focusPoints = [
      "Understanding the basics of React",
      "JSX and rendering components",
      "Props & State basics",
      "Functional vs Class Components",
    ];
  } else if (percentage <= 62.5) {
    // Intermediate Level (4-5 correct)
    focusPoints = [
      "Managing state efficiently with useState and useEffect",
      "Understanding React's Virtual DOM and reconciliation process",
      "Working with lists and keys properly",
      "Handling component re-renders for performance",
    ];
  } else if (percentage <= 87.5) {
    // Advanced Intermediate Level (6-7 correct)
    focusPoints = [
      "Global State Management - When to use Context API vs Redux",
      "Using useReducer instead of useState for complex state logic",
      "Memoization techniques - useMemo, useCallback, React.memo",
      "Fetching and caching data with React Query",
    ];
  } else {
    // Expert Level (8 correct)
    focusPoints = [
      "Optimizing React for production - Lazy Loading, Code Splitting, Concurrent Mode",
      "Server-Side Rendering (SSR) & Static Site Generation (SSG) with Next.js",
      "Unit Testing & Integration Testing in React",
      "Advanced Component Patterns (Render Props, Compound Components, HOCs)",
    ];
  }

  return (
    <div id="focus-areas">
      <h3>📌 Focus Areas for Improvement</h3>
      <ul>
        {focusPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
