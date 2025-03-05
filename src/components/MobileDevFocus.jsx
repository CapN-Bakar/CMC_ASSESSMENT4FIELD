export default function MobileDevFocus({ percentage }) {
  let focusAreas = [];

  if (percentage <= 37.5) {
    focusAreas = [
      "Understanding mobile app structure (Activities, ViewControllers, Widgets)",
      "Getting familiar with mobile UI components (Buttons, TextFields, Lists)",
      "Basic state management using useState (React Native) or Provider (Flutter)",
      "Introduction to debugging tools like Logcat, Xcode Console, and React Native Debugger",
    ];
  } else if (percentage <= 62.5) {
    focusAreas = [
      "Working with API requests in mobile applications (Retrofit, Alamofire, Fetch API)",
      "Handling navigation between screens efficiently",
      "Best practices for handling user input and forms in mobile apps",
      "Understanding the component lifecycle in React Native and Flutter",
    ];
  } else if (percentage <= 87.5) {
    focusAreas = [
      "Optimizing app performance with lazy loading and asynchronous operations",
      "Effective state management (Redux, MobX, Bloc)",
      "Working with background tasks (WorkManager, Services, Threads)",
      "Implementing authentication and secure storage in mobile applications",
    ];
  } else {
    focusAreas = [
      "Building scalable and maintainable mobile applications",
      "Advanced state management patterns and best practices",
      "Implementing push notifications and real-time data sync",
      "Deploying apps to the App Store and Google Play with CI/CD",
    ];
  }

  return (
    <div id="mobile-dev-focus">
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
