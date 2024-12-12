import quizCompleteImg from "../assets/quiz-complete.jpg";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;
  /*
return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>QUIZ COMPLETED!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
 */
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>QUIZ COMPLETED!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">percent%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">percent%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">percent%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        <li>
          <h4>1</h4>
          <h4>Quiz summary of Question and Answers</h4>
        </li>
        <li>
          <h4>2</h4>
          <h4>Quiz summary of Question and Answers</h4>
        </li>
        <li>
          <h4>3</h4>
          <h4>Quiz summary of Question and Answers</h4>
        </li>
        <hr></hr>
        <h1>
          Add-ons: Suggested learning material depending on the assessment score
        </h1>
      </ol>
    </div>
  );
}
