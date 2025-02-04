import { useState } from "react";

export default function FrontPage({ onStartQuiz }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [firstName, setFirstName] = useState("");

  const categories = [
    "Web Development",
    "Mobile Development",
    "Networking",
    "Software Engineering Principles",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCategory || !firstName.trim()) {
      alert("Please enter your name and select a category.");
      return;
    }
    console.log("Starting Quiz with:", firstName, selectedCategory);
    onStartQuiz(firstName, selectedCategory);
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

        {/* Start Quiz Button */}
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}
