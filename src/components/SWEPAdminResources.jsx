export default function SWEPAdminResources({ percentage }) {
  // Existing logic to determine resources based on percentage...
  let learningMaterials = [];
  let miniProject = "";

  if (percentage <= 37.5) {
    learningMaterials = [
      {
        name: "FreeCodeCamp - Software Engineering Principles",
        url: "https://www.freecodecamp.org/news/software-engineering-principles/",
      },
      {
        name: "W3Schools - Introduction to Software Development",
        url: "https://www.w3schools.com/softwaredev/",
      },
      {
        name: "GitHub Docs - Introduction to Git & Version Control",
        url: "https://docs.github.com/en/get-started/using-git/about-version-control",
      },
      {
        name: "Agile Alliance - Agile Software Development Guide",
        url: "https://www.agilealliance.org/agile101/",
      },
    ];
    miniProject =
      "💡 Create a simple version-controlled project using Git and GitHub.";
  } else if (percentage <= 62.5) {
    learningMaterials = [
      {
        name: "Kent C. Dodds - Clean Code Practices",
        url: "https://kentcdodds.com/blog/how-to-write-clean-code",
      },
      {
        name: "GeeksforGeeks - SOLID Principles Explained",
        url: "https://www.geeksforgeeks.org/solid-principle-in-programming-understand-with-real-life-examples/",
      }, // Replaced Udemy SOLID course
      {
        name: "DevOps Roadmap - CI/CD Pipelines",
        url: "https://roadmap.sh/devops",
      },
      {
        name: "Coursera - Introduction to Unit Testing",
        url: "https://www.coursera.org/learn/software-testing",
      }, // Note: Check if this specific course is still free/available
    ];
    miniProject =
      "💡 Set up a CI/CD pipeline using GitHub Actions and write basic unit tests.";
  } else if (percentage <= 87.5) {
    learningMaterials = [
      {
        name: "Uncle Bob - Clean Code",
        url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
      }, // Note: Link to a book purchase
      {
        name: "Scalable Software Architecture - System Design Patterns",
        url: "https://refactoring.guru/design-patterns",
      },
      {
        name: "Designing Microservices - Martin Fowler",
        url: "https://martinfowler.com/microservices/",
      },
      {
        name: "Advanced Git Techniques - Merge Conflicts & Rebase",
        url: "https://www.atlassian.com/git/tutorials/merging-vs-rebasing",
      },
    ];
    miniProject =
      "💡 Develop a microservices-based application with API rate-limiting strategies.";
  } else {
    learningMaterials = [
      {
        name: "Designing Data-Intensive Applications - Martin Kleppmann",
        url: "https://dataintensive.net/",
      }, // Note: Link to book website
      {
        name: "High-Performance System Architecture - Scalability Best Practices",
        url: "https://www.scalability-project.com/",
      }, // Note: Seems like a placeholder/project site
      {
        name: "TDD (Test-Driven Development) Advanced Guide",
        url: "https://testdriven.io/",
      },
      {
        name: "Software Security - Secure Coding Practices",
        url: "https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/",
      },
    ];
    miniProject =
      "💡 Architect a highly scalable, secure, and maintainable enterprise application using best coding practices.";
  }

  // Log received data (optional, kept from original)
  console.log("📌 SWEPAdminResources Received Data:", { percentage });

  return (
    <div id="swep-admin-resources">
      {" "}
      {/* Keep unique ID */}
      <h3>📚 Recommended Learning Materials</h3>
      {learningMaterials.length > 0 ? (
        <div className="resource-list">
          {" "}
          {/* Use class from WebDevResources */}
          {learningMaterials.map((material, index) => (
            <div key={index} className="resource-item">
              {" "}
              {/* Use class from WebDevResources */}
              {/* Keys 'name' and 'url' are already used */}
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
      <p>{miniProject}</p>
    </div>
  );
}
