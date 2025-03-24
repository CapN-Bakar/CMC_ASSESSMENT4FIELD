import { useState } from "react";

export default function FrontPage({ onStartQuiz }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [firstName, setFirstName] = useState("");
  const [selectedMode, setSelectedMode] = useState(""); // ✅ New State for Mode of Assessment

  const categories = [
    "Web Development",
    "Mobile Development",
    "Networking",
    "Software Engineering Principles",
  ];

  const selectedModes = ["Online", "In-person"]; // ✅ Dropdown options

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCategory || !firstName.trim() || !selectedMode) {
      alert(
        "Please enter your name, select a category, and choose a mode of assessment."
      );
      return;
    }
    console.log(
      "Starting Quiz with:",
      firstName,
      selectedCategory,
      selectedMode
    );
    onStartQuiz(firstName, selectedCategory, selectedMode); // ✅ Pass mode
  };

  return (
    <div id="front-page">
      {/* Dynamically Display Selected Category */}
      <h1>{selectedCategory || "Select a Quiz Category"}</h1>

      <form onSubmit={handleSubmit}>
        {/* Text Input for First Name */}
        <label>
          Enter Your First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your Name"
          />
        </label>

        {/* Dropdown for Category Selection */}
        <label>
          Select a Category:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">-- Select Category --</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        {/* Dropdown for Mode of Assessment */}
        <label>
          Mode of Assessment:
          <select
            value={selectedMode}
            onChange={(e) => setSelectedMode(e.target.value)}
          >
            <option value="">-- Select Mode --</option>
            {selectedModes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </label>

        {/* Start Quiz Button */}
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}
