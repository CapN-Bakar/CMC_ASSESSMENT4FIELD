export default [
  // Web Development Questions (React-focused: hooks, state management, Virtual DOM, context API, etc.)
  {
    id: "wd1",
    category: "Web Development",
    text: "Which lifecycle method is used to fetch data in a class component?",
    answers: [
      "componentDidMount()",
      "useEffect()",
      "componentWillUpdate()",
      "constructor()",
    ],
  },
  {
    id: "wd2",
    category: "Web Development",
    text: "What is the purpose of the 'useState' hook in React?",
    answers: [
      "To manage state in functional components",
      "To handle side effects",
      "To create new components",
      "To interact with the Redux store",
    ],
  },
  {
    id: "wd3",
    category: "Web Development",
    text: "Which of the following is NOT a valid way to update state in React?",
    answers: [
      "this.state.count = count + 1;",
      "this.setState({ count: count + 1 });",
      "setCount(count + 1);",
      "useReducer to dispatch an action",
    ],
  },
  {
    id: "wd4",
    category: "Web Development",
    text: "Which statement best describes React's Virtual DOM?",
    answers: [
      "A lightweight copy of the actual DOM that updates efficiently",
      "A built-in database that stores React components",
      "A new HTML specification for rendering faster pages",
      "A tool used only for server-side rendering",
    ],
  },
  {
    id: "wd5",
    category: "Web Development",
    text: "What is the purpose of 'key' props in React lists?",
    answers: [
      "To help React identify which items have changed, added, or removed",
      "To make elements unique for accessibility",
      "To create animations",
      "To store state for each list item",
    ],
  },
  {
    id: "wd6",
    category: "Web Development",
    text: "Which of the following correctly describes 'props' in React?",
    answers: [
      "Props are used to pass data from parent to child components",
      "Props are used to manage local state in functional components",
      "Props can only be changed within the component itself",
      "Props are used to handle side effects",
    ],
  },
  {
    id: "wd7",
    category: "Web Development",
    text: "Which command is used to create a new React app using Create React App?",
    answers: [
      "npx create-react-app my-app",
      "npm install react-app",
      "npm create-react-app my-app",
      "yarn create react-app",
    ],
  },
  {
    id: "wd8",
    category: "Web Development",
    text: "Which statement is true about React Context API?",
    answers: [
      "It allows state to be shared across components without prop drilling",
      "It replaces Redux for all state management needs",
      "It can only be used in class components",
      "It is used to manage server-side state",
    ],
  },

  //Mobile Development (Job-Focused)
  {
    id: "md1",
    category: "Mobile Development",
    text: "Which design pattern is commonly used in Android and iOS app architecture?",
    answers: ["MVVM", "MVC", "MVP", "All of the above"],
  },
  {
    id: "md2",
    category: "Mobile Development",
    text: "What is the purpose of Jetpack Compose in Android development?",
    answers: [
      "To build UI with a declarative approach",
      "To manage database transactions",
      "To optimize network requests",
      "To replace Kotlin for Android development",
    ],
  },
  {
    id: "md3",
    category: "Mobile Development",
    text: "Which tool is commonly used for debugging network requests in mobile apps?",
    answers: ["Charles Proxy", "Postman", "Fiddler", "All of the above"],
  },
  {
    id: "md4",
    category: "Mobile Development",
    text: "How does React Native communicate between JavaScript and Native modules?",
    answers: [
      "Through a bridge",
      "Using WebSockets",
      "Via local storage",
      "By REST API calls",
    ],
  },
  {
    id: "md5",
    category: "Mobile Development",
    text: "What is the best practice for managing state in Flutter applications?",
    answers: ["Provider", "Redux", "Bloc", "All of the above"],
  },
  {
    id: "md6",
    category: "Mobile Development",
    text: "Which Android component is responsible for handling background tasks efficiently?",
    answers: ["WorkManager", "AsyncTask", "IntentService", "Thread"],
  },
  {
    id: "md7",
    category: "Mobile Development",
    text: "Which database is commonly used for local storage in mobile apps?",
    answers: ["SQLite", "Firebase Firestore", "Realm", "All of the above"],
  },
  {
    id: "md8",
    category: "Mobile Development",
    text: "What is the best approach for handling different screen sizes in mobile development?",
    answers: [
      "Using responsive layouts & adaptive UI components",
      "Hardcoding pixel values",
      "Creating separate apps for different screen sizes",
      "Only supporting standard screen sizes",
    ],
  },

  // Networking
  {
    id: "nw1",
    category: "Networking",
    text: "What tool is commonly used to debug network issues?",
    answers: ["Wireshark", "Postman", "cURL", "All of the above"],
  },
  {
    id: "nw2",
    category: "Networking",
    text: "What is the primary role of a CDN (Content Delivery Network)?",
    answers: [
      "To distribute content across multiple servers for faster access",
      "To secure a website from DDoS attacks",
      "To store backup data",
      "To handle user authentication",
    ],
  },
  {
    id: "nw3",
    category: "Networking",
    text: "Which of the following is a key security risk in networking?",
    answers: [
      "Man-in-the-Middle Attack",
      "SQL Injection",
      "Cross-Site Scripting",
      "None of the above",
    ],
  },
  {
    id: "nw4",
    category: "Networking",
    text: "Which protocol is commonly used for secure API communication?",
    answers: ["HTTPS", "FTP", "Telnet", "SMTP"],
  },
  {
    id: "nw5",
    category: "Networking",
    text: "What is the main function of a firewall in a network?",
    answers: [
      "To filter incoming and outgoing traffic based on security rules",
      "To resolve domain names into IP addresses",
      "To optimize website performance",
      "To manage cloud computing resources",
    ],
  },
  {
    id: "nw6",
    category: "Networking",
    text: "Which networking tool is used to check connectivity between two devices?",
    answers: ["ping", "traceroute", "nslookup", "netstat"],
  },
  {
    id: "nw7",
    category: "Networking",
    text: "Which networking layer handles encryption for secure communication?",
    answers: [
      "Transport Layer (TLS/SSL)",
      "Network Layer",
      "Data Link Layer",
      "Application Layer",
    ],
  },
  {
    id: "nw8",
    category: "Networking",
    text: "What does a VPN (Virtual Private Network) do?",
    answers: [
      "Encrypts internet traffic for security and privacy",
      "Increases internet speed",
      "Hosts cloud applications",
      "Acts as a firewall",
    ],
  },

  //Software Engineering Principles
  {
    id: "se1",
    category: "Software Engineering Principles",
    text: "What is the purpose of CI/CD in software development?",
    answers: [
      "To automate the process of building, testing, and deploying applications",
      "To track bugs and issues",
      "To monitor application performance",
      "To generate documentation",
    ],
  },
  {
    id: "se2",
    category: "Software Engineering Principles",
    text: "Which of the following is a key principle of SOLID design?",
    answers: [
      "Single Responsibility Principle",
      "Singleton Pattern",
      "State Management Principle",
      "Scalability Optimization",
    ],
  },
  {
    id: "se3",
    category: "Software Engineering Principles",
    text: "What is the primary benefit of writing unit tests?",
    answers: [
      "To ensure individual components work as expected",
      "To test the entire system end-to-end",
      "To improve UI performance",
      "To optimize database queries",
    ],
  },
  {
    id: "se4",
    category: "Software Engineering Principles",
    text: "Which practice helps avoid merge conflicts in a Git-based workflow?",
    answers: [
      "Frequent commits and rebasing",
      "Ignoring version control",
      "Manually copying files",
      "Using FTP for updates",
    ],
  },
  {
    id: "se5",
    category: "Software Engineering Principles",
    text: "What is the main advantage of microservices architecture?",
    answers: [
      "Scalability and independent service deployment",
      "Faster UI rendering",
      "Eliminating the need for APIs",
      "Simplifying database management",
    ],
  },
  {
    id: "se6",
    category: "Software Engineering Principles",
    text: "Which of the following is an example of a design pattern?",
    answers: [
      "Factory Pattern",
      "Agile Methodology",
      "Scrum",
      "Pair Programming",
    ],
  },
  {
    id: "se7",
    category: "Software Engineering Principles",
    text: "What is a common technique for handling API rate limits?",
    answers: [
      "Implementing exponential backoff",
      "Making unlimited API calls",
      "Using a single-threaded approach",
      "Caching responses forever",
    ],
  },
  {
    id: "se8",
    category: "Software Engineering Principles",
    text: "What is the benefit of writing clean and maintainable code?",
    answers: [
      "It reduces technical debt and makes debugging easier",
      "It speeds up the application performance",
      "It eliminates the need for testing",
      "It allows writing code without documentation",
    ],
  },
];
