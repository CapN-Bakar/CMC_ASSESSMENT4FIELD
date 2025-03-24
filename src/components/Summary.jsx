import { useState, useRef } from "react";
import html2canvas from "html2canvas";
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
  mode,
  onReset,
}) {
  const navigate = useNavigate();
  const focusRef = useRef(null);
  const [snapshot, setSnapshot] = useState(null);

  console.log("✅ Category received in Summary:", category);
  console.log("✅ Summary received userAnswers:", userAnswers);
  console.log("✅ Summary received questions:", questions);
  console.log("🛠 Mode received in Summary:", mode);

  if (
    !firstName ||
    !category ||
    userAnswers.length === 0 ||
    questions.length === 0 ||
    !mode
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
          mode,
          correctAnswers,
          totalQuestions,
          percentageCorrect,
          userAnswers,
          questions,
        },
      });
    } else {
      alert("Incorrect passkey! Access denied.");
    }
  };

  const handleSnapshot = async () => {
    if (!focusRef.current) return;
    const canvas = await html2canvas(focusRef.current);
    const imgData = canvas.toDataURL("image/png");
    setSnapshot(imgData);
  };

  const handlePrint = () => {
    if (!snapshot) return;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Focus Areas Snapshot</title>
          <style>
            @media print {
              button { display: none !important; }
            }
          </style>
        </head>
        <body style="text-align: center;">
          <h2>Focus Areas for ${firstName}</h2>
          <img src="${snapshot}" style="max-width: 100%;" />
          <br>
          <button onclick="window.print()">Print</button>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz Complete" />
      <h2>Well done, {firstName}!</h2>

      <div className="summary-header">
        <h4>
          Category: <span className="category-text">{category}</span>
        </h4>
        <h4>
          Mode of Assessment: <span className="mode-text">{mode}</span>
        </h4>
        <h4>QUIZ COMPLETED!</h4>
      </div>

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

      <div className="qa-summary">
        <h4>📝 Your Answers</h4>
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
      </div>

      {/* ✅ Focus Areas Section with Snapshot Feature */}
      <div className="focus-areas" ref={focusRef}>
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
      </div>

      {/* ✅ Snapshot Buttons */}
      <div className="button-group">
        <button onClick={handleSnapshot}>📸 Take Snapshot</button>
        {snapshot && (
          <button className="print-button" onClick={handlePrint}>
            🖨️ Print Snapshot
          </button>
        )}
      </div>

      <div className="button-group">
        <button onClick={onReset}>Restart</button>
        <button onClick={handleAdminClick}>ADMIN</button>
      </div>
    </div>
  );
}
