import questionData from "../assets/questions.json";
import { useState } from "react";

export const MoviePicker = () => {
  const [questionNum, setQuestionNum] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (questionNum === questionData.questions.length - 1) {
      setQuestionNum(0);
    } else {
      setQuestionNum(questionNum + 1);
    }
    console.log(questionNum);
  };

  return (
    <div className="movie-picker-page">
      <div>
        <h1>Movie Picker</h1>
      </div>

      <div className="question-container">
        <h3>Question ({questionNum + 1}/3): </h3>
        <h3>{questionData.questions[questionNum].question}</h3>
      </div>
      <div className="answer-list">
        <div className="answer" onClick={handleSubmit}>
          <div>{questionData.questions[questionNum].answers[0]}</div>
        </div>
        <div className="answer" onClick={handleSubmit}>
          <div>{questionData.questions[questionNum].answers[1]}</div>
        </div>
        <div className="answer" onClick={handleSubmit}>
          <div>{questionData.questions[questionNum].answers[2]}</div>
        </div>
        <div className="answer" onClick={handleSubmit}>
          <div>{questionData.questions[questionNum].answers[3]}</div>
        </div>
      </div>
    </div>
  );
};
