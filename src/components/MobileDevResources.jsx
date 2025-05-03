export default function MobileDevResources({ percentage }) {
  // Existing logic to determine resources based on percentage...
  let resources = {
    learningMaterials: [],
    miniProject: "",
  };

  if (percentage <= 37.5) {
    resources.learningMaterials = [
      {
        name: "Google Android Developer Guide",
        url: "https://developer.android.com/guide",
      },
      {
        name: "iOS Human Interface Guidelines",
        url: "https://developer.apple.com/design/human-interface-guidelines/",
      },
      {
        name: "Flutter Official Docs - Getting Started",
        url: "https://docs.flutter.dev/get-started/install",
      },
      {
        name: "React Native - Basics",
        url: "https://reactnative.dev/docs/getting-started",
      },
    ];
    resources.miniProject =
      "Build a simple mobile UI with static content (React Native, Flutter, or Android XML).";
  } else if (percentage <= 62.5) {
    resources.learningMaterials = [
      {
        name: "Jetpack Compose - Android UI Toolkit",
        url: "https://developer.android.com/jetpack/compose",
      },
      {
        name: "Swift UI - Apple Official Docs",
        url: "https://developer.apple.com/documentation/swiftui/",
      },
      {
        name: "Managing State in React Native",
        url: "https://reactnative.dev/docs/state",
      },
      {
        name: "Bloc State Management for Flutter",
        url: "https://bloclibrary.dev/",
      },
    ];
    resources.miniProject =
      "Build a mobile app that fetches and displays data from an API.";
  } else if (percentage <= 87.5) {
    resources.learningMaterials = [
      {
        name: "Best Practices in Mobile Architecture",
        url: "https://developer.android.com/jetpack/guide",
      },
      {
        name: "Effective State Management in Flutter",
        url: "https://flutter.dev/docs/development/data-and-backend/state-mgmt",
      },
      {
        name: "Optimizing React Native Performance",
        url: "https://reactnative.dev/docs/performance",
      },
      {
        name: "Mobile App Security Guidelines",
        url: "https://owasp.org/www-project-mobile-security-testing-guide/",
      },
    ];
    resources.miniProject =
      "Create a mobile e-commerce app with authentication and local storage.";
  } else {
    resources.learningMaterials = [
      {
        name: "Advanced Android App Architecture",
        url: "https://developer.android.com/topic/architecture",
      },
      {
        name: "Swift Performance Optimization",
        url: "https://developer.apple.com/documentation/swift/optimizing-performance",
      },
      {
        name: "React Native - Native Modules",
        url: "https://reactnative.dev/docs/native-modules-intro",
      },
      {
        name: "Flutter - Advanced Performance Tuning",
        url: "https://flutter.dev/docs/perf/rendering",
      },
    ];
    resources.miniProject =
      "Develop a full-fledged mobile app with push notifications, real-time database, and offline mode.";
  }

  // Log received data (optional, kept from original)
  console.log("📌 MobileDevResources Received Data:", { percentage });

  return (
    <div id="mobile-dev-resources">
      {" "}
      {/* Keep unique ID */}
      <h3>📚 Recommended Learning Materials</h3>
      {resources.learningMaterials.length > 0 ? (
        <div className="resource-list">
          {" "}
          {/* Use class from WebDevResources */}
          {resources.learningMaterials.map((material, index) => (
            <div key={index} className="resource-item">
              {" "}
              {/* Use class from WebDevResources */}
              {/* Ensure keys are 'name' and 'url' */}
              <a href={material.url} target="_blank" rel="noopener noreferrer">
                {material.name}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>✅ No specific materials recommended based on this score.</p> // Added a fallback message
      )}
      <h3>💡 Mini-Project</h3>
      <p>{resources.miniProject}</p>
    </div>
  );
}
