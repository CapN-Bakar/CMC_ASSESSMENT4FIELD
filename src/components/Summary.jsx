import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import quizCompleteImg from "../assets/quiz-complete.jpg";
import WebDevFocus from "./WebDevFocus";
import MobileDevFocus from "./MobileDevFocus";
import NetworkingFocus from "./NetworkingFocus";
import SWEPFocus from "./SWEPFocus";

export default function Summary({
  firstName,
  userAnswers = [],
  questions = [],
  category,
  onReset,
}) {
  const navigate = useNavigate();

  console.log("✅ Category received in Summary:", category);
  console.log("✅ Summary received userAnswers:", userAnswers);
  console.log("✅ Summary received questions:", questions);

  // ✅ Prevents rendering if data is missing
  if (
    !firstName ||
    !category ||
    userAnswers.length === 0 ||
    questions.length === 0
  ) {
    return <p>❌ Error: Missing quiz data.</p>;
  }

  const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index]?.answers[0]
  ).length;
  const totalQuestions = questions.length;
  const wrongAnswers = totalQuestions - skippedAnswers - correctAnswers;
  const percentageCorrect = Math.round((correctAnswers / totalQuestions) * 100);
  const percentageSkipped = Math.round((skippedAnswers / totalQuestions) * 100);
  const percentageWrong = Math.round((wrongAnswers / totalQuestions) * 100);

  const handleAdminClick = () => {
    const passkey = prompt("Passkey:");
    if (passkey === "Thisisadmin") {
      navigate("/admin", {
        state: {
          firstName,
          category: category || "No Category Selected",
          correctAnswers,
          totalQuestions,
          percentageCorrect,
          userAnswers, // ✅ Ensure userAnswers are passed
          questions, // ✅ Ensure questions are passed
        },
      });
    } else {
      alert("Incorrect passkey! Access denied.");
    }
  };

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz Complete" />
      <h2>Well done, {firstName}!</h2>

      <h3>
        Category:{" "}
        <span className="category-text">
          {category || "No Category Selected"}
        </span>
      </h3>

      <h3>QUIZ COMPLETED!</h3>

      {/* ✅ Updated Quiz Statistics with Circular Design */}
      <div id="summary-stats" className="score-design">
        <div className="stat">
          <CircularProgressbar
            value={percentageSkipped}
            text={`${skippedAnswers} (${percentageSkipped}%)`}
            styles={buildStyles({ pathColor: "#f5a623", textColor: "black" })}
          />
          <p>Skipped</p>
        </div>
        <div className="stat">
          <CircularProgressbar
            value={percentageCorrect}
            text={`${correctAnswers} (${percentageCorrect}%)`}
            styles={buildStyles({ pathColor: "#28a745", textColor: "black" })}
          />
          <p>Correct</p>
        </div>
        <div className="stat">
          <CircularProgressbar
            value={percentageWrong}
            text={`${wrongAnswers} (${percentageWrong}%)`}
            styles={buildStyles({ pathColor: "#dc3545", textColor: "black" })}
          />
          <p>Incorrect</p>
        </div>
      </div>

      {/* ✅ Display Q&A Summary */}
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) cssClass += " skipped";
          else if (answer === questions[index]?.answers[0])
            cssClass += " correct";
          else cssClass += " wrong";

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index]?.text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>

      {/* ✅ Display Focus Areas Based on Category */}
      {category === "Web Development" && (
        <WebDevFocus userAnswers={userAnswers} questions={questions} />
      )}
      {category === "Mobile Development" && (
        <MobileDevFocus userAnswers={userAnswers} questions={questions} />
      )}
      {category === "Networking" && (
        <NetworkingFocus userAnswers={userAnswers} questions={questions} />
      )}
      {category === "Software Engineering Principles" && (
        <SWEPFocus userAnswers={userAnswers} questions={questions} />
      )}

      <div className="button-group">
        <button onClick={onReset}>Restart</button>
        <button onClick={handleAdminClick}>ADMIN</button>
      </div>
    </div>
  );
}
