import questionData from "../assets/questions.json";
import { useState, useEffect } from "react";
import placeholderImage from "../assets/imgs/placeholder.jpg";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
export const MoviePicker = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const hpMoviesArr = [671, 672, 673, 674, 675, 767, 12444, 12445];
  const [rndMovieIndex] = useState(Math.floor(Math.random() * hpMoviesArr.length));
  const [hpMovie, setHPMovie] = useState(null);
  const moviePictureUrl = "https://image.tmdb.org/t/p/w500";
  const [showHpImg, setShowHpImg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (questionNum === questionData.questions.length - 1) {
      // setQuestionNum(0);
      setShowHpImg(true);
    } else {
      setQuestionNum(questionNum + 1);
    }
  };

  useEffect(() => {
    const getHPMovie = async () => {
      try {
        const res = await fetch(`${API_URL}/movies/${hpMoviesArr[rndMovieIndex]}`);
        const parsedRes = await res.json();
        setHPMovie(parsedRes);
      } catch (err) {
        console.log(err);
      }
    };
    getHPMovie();
  }, []);

  if (!hpMovie) {
    <p>Loading ...</p>;
  }

  return (
    <div className="movie-picker-page">
      <div>
        <h1>Movie Picker</h1>
      </div>

      {!showHpImg && (
        <div className="question-container">
          <h4>
            Question ({questionNum + 1}/{questionData.questions.length}):
          </h4>
          <h3>{questionData.questions[questionNum].question}</h3>
        </div>
      )}
      {!showHpImg && (
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
      )}

      {showHpImg && (
        <div className="hp-movie-container">
          <Link to={`/movie/${hpMoviesArr[rndMovieIndex]}`}>
            <div className="movie-card">
              <img
                src={hpMovie && hpMovie.poster_path ? moviePictureUrl + hpMovie.poster_path : placeholderImage}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = hpMovie.poster_path;
                }}
              />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};
