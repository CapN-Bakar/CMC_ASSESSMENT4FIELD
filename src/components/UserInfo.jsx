// UserInfo.jsx
import React, { useState } from "react";

export default function UserInfo({ onSubmit }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age, school });
  };

  return (
    <div>
      <h2>User Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          School:
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
