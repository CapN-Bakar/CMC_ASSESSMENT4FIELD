import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import quizCompleteImg from "../assets/quiz-complete.jpg";
import FocusAreas from "./FocusAreas"; // ✅ Import the new component

export default function Summary({
  firstName,
  userAnswers,
  questions,
  category,
  onReset,
}) {
  const navigate = useNavigate();

  const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].answers[0]
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
          correctAnswers,
          totalQuestions,
          percentageCorrect,
          category: category || "No Category Selected",
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

      {/* Updated Quiz Statistics with Circular Design */}
      <div id="summary-stats" className="score-design">
        <div className="stat">
          <CircularProgressbar
            value={percentageSkipped}
            text={`${skippedAnswers} (${percentageSkipped}%)`}
            styles={buildStyles({
              pathColor: "#f5a623",
              textColor: "black",
              trailColor: "#e9ecef",
              textSize: "12px",
            })}
          />
          <p>Skipped</p>
        </div>
        <div className="stat">
          <CircularProgressbar
            value={percentageCorrect}
            text={`${correctAnswers} (${percentageCorrect}%)`}
            styles={buildStyles({
              pathColor: "#28a745",
              textColor: "black",
              trailColor: "#e9ecef",
              textSize: "12px",
            })}
          />
          <p>Correct</p>
        </div>
        <div className="stat">
          <CircularProgressbar
            value={percentageWrong}
            text={`${wrongAnswers} (${percentageWrong}%)`}
            styles={buildStyles({
              pathColor: "#dc3545",
              textColor: "black",
              trailColor: "#e9ecef",
              textSize: "12px",
            })}
          />
          <p>Incorrect</p>
        </div>
      </div>

      {/* ✅ Display Q&A Summary */}
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) cssClass += " skipped";
          else if (answer === questions[index].answers[0])
            cssClass += " correct";
          else cssClass += " wrong";

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>

      {/* ✅ Show Focus Areas ONLY if the category is Web Development */}
      {category === "Web Development" && (
        <FocusAreas percentage={percentageCorrect} />
      )}

      <div className="button-group">
        <button onClick={onReset}>Restart</button>
        <button onClick={handleAdminClick}>ADMIN</button>
      </div>
    </div>
  );
}
