export default function SWEPFocus({ percentage }) {
  let focusAreas = [];

  if (percentage <= 37.5) {
    focusAreas = [
      "Understanding the basics of software development methodologies (Agile, Waterfall, Scrum)",
      "Learning about version control systems (Git, GitHub, GitLab)",
      "Exploring the importance of writing clean and maintainable code",
      "Getting familiar with fundamental programming concepts like loops, conditions, and functions",
    ];
  } else if (percentage <= 62.5) {
    focusAreas = [
      "Practicing writing unit tests for code reliability",
      "Understanding CI/CD pipelines for automating build and deployment",
      "Exploring the principles of SOLID design for better software architecture",
      "Using proper Git workflows to avoid merge conflicts",
    ];
  } else if (percentage <= 87.5) {
    focusAreas = [
      "Implementing scalable microservices architectures",
      "Using design patterns effectively (Factory, Singleton, Observer, etc.)",
      "Handling API rate limits with best practices like exponential backoff",
      "Building a robust CI/CD pipeline with automated testing",
    ];
  } else {
    focusAreas = [
      "Optimizing large-scale software applications for performance",
      "Mastering advanced testing strategies (Unit, Integration, End-to-End)",
      "Implementing API gateways and secure authentication (OAuth, JWT, SSO)",
      "Contributing to open-source projects and writing high-quality documentation",
    ];
  }

  return (
    <div id="swep-focus">
      <h2>🎯 Areas to Focus On</h2>
      <div className="focus-list">
        {focusAreas.map((area, index) => (
          <div key={index} className="focus-item">
            {area}
          </div>
        ))}
      </div>
    </div>
  );
}
