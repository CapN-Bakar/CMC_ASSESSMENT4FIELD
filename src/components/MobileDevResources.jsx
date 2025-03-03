export default function MobileDevResources({ percentage }) {
  let resources = {
    learningMaterials: [],
    miniProject: "",
  };

  if (percentage <= 37.5) {
    // Beginner Level (0-3 correct)
    resources.learningMaterials = [
      {
        title: "Google Android Developer Guide",
        link: "https://developer.android.com/guide",
      },
      {
        title: "iOS Human Interface Guidelines",
        link: "https://developer.apple.com/design/human-interface-guidelines/",
      },
      {
        title: "Flutter Official Docs - Getting Started",
        link: "https://docs.flutter.dev/get-started/install",
      },
      {
        title: "React Native - Basics",
        link: "https://reactnative.dev/docs/getting-started",
      },
    ];
    resources.miniProject =
      "Build a simple mobile UI with static content (React Native, Flutter, or Android XML).";
  } else if (percentage <= 62.5) {
    // Intermediate Level (4-5 correct)
    resources.learningMaterials = [
      {
        title: "Jetpack Compose - Android UI Toolkit",
        link: "https://developer.android.com/jetpack/compose",
      },
      {
        title: "Swift UI - Apple Official Docs",
        link: "https://developer.apple.com/documentation/swiftui/",
      },
      {
        title: "Managing State in React Native",
        link: "https://reactnative.dev/docs/state",
      },
      {
        title: "Bloc State Management for Flutter",
        link: "https://bloclibrary.dev/",
      },
    ];
    resources.miniProject =
      "Build a mobile app that fetches and displays data from an API.";
  } else if (percentage <= 87.5) {
    // Advanced Intermediate (6-7 correct)
    resources.learningMaterials = [
      {
        title: "Best Practices in Mobile Architecture",
        link: "https://developer.android.com/jetpack/guide",
      },
      {
        title: "Effective State Management in Flutter",
        link: "https://flutter.dev/docs/development/data-and-backend/state-mgmt",
      },
      {
        title: "Optimizing React Native Performance",
        link: "https://reactnative.dev/docs/performance",
      },
      {
        title: "Mobile App Security Guidelines",
        link: "https://owasp.org/www-project-mobile-security-testing-guide/",
      },
    ];
    resources.miniProject =
      "Create a mobile e-commerce app with authentication and local storage.";
  } else {
    // Expert Level (8 correct)
    resources.learningMaterials = [
      {
        title: "Advanced Android App Architecture",
        link: "https://developer.android.com/topic/architecture",
      },
      {
        title: "Swift Performance Optimization",
        link: "https://developer.apple.com/documentation/swift/optimizing-performance",
      },
      {
        title: "React Native - Native Modules",
        link: "https://reactnative.dev/docs/native-modules-intro",
      },
      {
        title: "Flutter - Advanced Performance Tuning",
        link: "https://flutter.dev/docs/perf/rendering",
      },
    ];
    resources.miniProject =
      "Develop a full-fledged mobile app with push notifications, real-time database, and offline mode.";
  }

  return (
    <div id="mobile-dev-resources">
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

      <h3>💡 Mini-Project</h3>
      <p>{resources.miniProject}</p>
    </div>
  );
}
