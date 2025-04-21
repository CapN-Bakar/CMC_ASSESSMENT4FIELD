import { useRef } from "react"; // useState removed as snapshot state is gone
// import html2canvas from "html2canvas"; // No longer needed for certificate
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// **IMPORTANT**: Make sure the logo path is correct and accessible.
// Using the quiz logo for this example, you might want a different one.
import certificateLogo from "../assets/quiz-logo.jpg"; // Using quiz logo as example

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
  // focusRef and snapshot state removed

  console.log("✅ Category received in Summary:", category);
  console.log("✅ Summary received userAnswers:", userAnswers);
  console.log("✅ Summary received questions:", questions);
  console.log("🛠 Mode received in Summary:", mode);

  if (
    !firstName ||
    !category ||
    !Array.isArray(userAnswers) ||
    !Array.isArray(questions) ||
    questions.length === 0 ||
    userAnswers.length !== questions.length ||
    !mode
  ) {
    console.error("❌ Error: Missing or invalid quiz data.", {
      firstName,
      category,
      userAnswers,
      questions,
      mode,
    });
    return (
      <div id="summary">
        <p>❌ Error: Could not load summary data. Please try again.</p>
      </div>
    );
  }

  const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
  const correctAnswers = userAnswers.filter(
    (answer, index) =>
      questions[index] && answer === questions[index].answers[0]
  ).length;
  const totalQuestions = questions.length;
  const wrongAnswers = totalQuestions - skippedAnswers - correctAnswers;

  const percentageCorrect =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;
  const percentageSkipped =
    totalQuestions > 0
      ? Math.round((skippedAnswers / totalQuestions) * 100)
      : 0;
  const percentageWrong =
    totalQuestions > 0 ? Math.round((wrongAnswers / totalQuestions) * 100) : 0;

  const handleAdminClick = () => {
    const passkey = prompt("Passkey:");
    if (passkey === "Thisisadmin") {
      // Consider better security
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

  // handleSnapshot function removed

  // --- MODIFIED handlePrint FUNCTION ---
  const handlePrint = () => {
    const printDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }); // Format the date nicely

    const certificateWindow = window.open("", "_blank");
    certificateWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Certificate of Completion - ${firstName}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@700&display=swap'); /* Example fonts */

          body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f0f0f0; /* Background for preview */
          }
          .certificate-container {
            width: 800px; /* Approx A4 width landscape-ish */
            height: 565px; /* Approx A4 height landscape-ish */
            border: 10px solid #0056b3; /* Primary dark color border */
            padding: 30px;
            background-color: #ffffff; /* White background */
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            position: relative;
            text-align: center;
            box-sizing: border-box; /* Include padding and border in size */
          }
          .certificate-container::before { /* Optional inner border */
            content: '';
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            border: 2px solid #007bff; /* Primary color */
            pointer-events: none; /* Prevent interaction */
          }
          .logo {
            max-width: 100px;
            max-height: 80px; /* Adjust size */
            margin-bottom: 15px;
          }
          h1 {
            font-family: 'Playfair Display', serif; /* Fancy font for title */
            color: #0056b3; /* Primary dark */
            font-size: 2.5em;
            margin: 10px 0;
          }
          h2 {
            font-size: 1.2em;
            color: #333;
            margin: 5px 0;
          }
          .recipient-name {
            font-family: 'Playfair Display', serif; /* Fancy font */
            font-size: 2em;
            color: #007bff; /* Primary color */
            margin: 15px 0;
            border-bottom: 2px solid #eee;
            display: inline-block;
            padding-bottom: 5px;
          }
          .completion-text {
            font-size: 1.1em;
            margin: 15px 0;
            color: #555;
          }
          .category-text {
            font-weight: bold;
            color: #212529; /* Dark color */
          }
          .score-text {
            font-size: 1em;
            margin-top: 20px;
            color: #666;
          }
          .date-signature {
            margin-top: 40px;
            display: flex;
            justify-content: space-around;
            align-items: flex-end; /* Align text baseline */
            font-size: 0.9em;
          }
          .date-signature div {
             width: 40%;
             text-align: center;
             border-top: 1px solid #ccc;
             padding-top: 5px;
          }

          .print-button-container {
            position: fixed; /* Keep buttons visible */
            bottom: 10px;
            left: 10px;
            background-color: #fff;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .print-button-container button { margin: 0 5px; }

          @page { /* Attempt to set print size (might not work everywhere) */
            size: A4 landscape;
            margin: 1cm;
          }

          @media print {
            body {
               background-color: #ffffff; /* White background for printing */
            }
            .certificate-container {
               box-shadow: none; /* No shadow when printing */
               margin: 0; /* Remove margin for printing */
               /* Ensure scaling fits page - might need adjustments */
               width: 98%;
               height: auto;
               transform: scale(0.98); /* Slightly scale down if needed */
               transform-origin: top left;
            }
             .print-button-container {
               display: none !important;
             }
          }
        </style>
      </head>
      <body>
        <div class="certificate-container">
          <img src="${certificateLogo}" alt="Logo" class="logo" />
          <h1>Certificate of Completion</h1>
          <h2>This certificate is awarded to</h2>
          <div class="recipient-name">${firstName}</div>
          <div class="completion-text">
            For successfully completing the assessment in
            <br/>
            <span class="category-text">${category}</span>
            <br/>
            via ${mode} assessment.
          </div>
          <div class="score-text">
            Achieved a score of: <strong>${percentageCorrect}%</strong> (${correctAnswers} out of ${totalQuestions} correct)
          </div>
          <div class="date-signature">
             <div>
               ${printDate}
               <br/>
               <strong>Date Issued</strong>
             </div>
             <div>
               CMC Assessment Authority <br/>
               <strong>Issuing Authority</strong>
             </div>
          </div>
        </div>

        <div class="print-button-container">
           <button onclick="window.print()">Print Certificate</button>
           <button onclick="window.close()">Close</button>
        </div>

      </body>
      </html>
    `);
    certificateWindow.document.close(); // Necessary for some browsers
  };
  // --- END MODIFIED handlePrint ---

  const getAnswerClass = (answer, index) => {
    if (!questions[index]) return "user-answer";
    if (answer === null) return "user-answer skipped";
    return answer === questions[index].answers[0]
      ? "user-answer correct"
      : "user-answer wrong";
  };

  return (
    <div id="summary">
      <img src={certificateLogo} alt="Quiz Complete" /> {/* Using same logo */}
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
        <div className="stat progress-skipped">
          <CircularProgressbar
            value={percentageSkipped}
            text={`${skippedAnswers}`}
          />
          <p>Skipped ({percentageSkipped}%)</p>
        </div>
        <div className="stat progress-correct">
          <CircularProgressbar
            value={percentageCorrect}
            text={`${correctAnswers}`}
          />
          <p>Correct ({percentageCorrect}%)</p>
        </div>
        <div className="stat progress-wrong">
          <CircularProgressbar
            value={percentageWrong}
            text={`${wrongAnswers}`}
          />
          <p>Incorrect ({percentageWrong}%)</p>
        </div>
      </div>
      <div className="qa-summary">
        <h4>📝 Your Answers</h4>
        <ol>
          {userAnswers.map((answer, index) =>
            questions[index] ? (
              <li key={index}>
                <h3>{index + 1}</h3>
                <p className="question">{questions[index].text}</p>
                <p className={getAnswerClass(answer, index)}>
                  {answer ?? "Skipped"}
                </p>
              </li>
            ) : null
          )}
        </ol>
      </div>
      {/* Focus Areas Section - No longer snapshotted directly for certificate */}
      <div className="focus-areas-container">
        {/* The focusRef is removed from here */}
        <div className="focus-areas">
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
          {![
            "Web Development",
            "Mobile Development",
            "Networking",
            "Software Engineering Principles",
          ].includes(category) && (
            <p>No specific focus area component available for this category.</p>
          )}
        </div>
      </div>
      {/* --- UPDATED BUTTONS --- */}
      {/* Action Buttons */}
      <div className="button-group action-buttons">
        {/* Changed button text */}
        <button onClick={handlePrint}>🖨️ Print Certificate</button>
        <button onClick={onReset}>Restart Quiz</button>
        <button onClick={handleAdminClick}>ADMIN Access</button>
      </div>
      {/* Snapshot Preview Area Removed */}
    </div>
  );
}
