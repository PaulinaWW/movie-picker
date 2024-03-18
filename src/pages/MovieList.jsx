// import genreJson from "../assets/genres.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import placeholderImage from "../assets/imgs/placeholder.jpg";

const MovieList = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch("http://localhost:5000/movies");
        const parsedRes = await res.json();
        setMovieData(parsedRes);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, []);

  const moviePictureUrl = "https://image.tmdb.org/t/p/w300";
  const [movieFilter, setMovieFilter] = useState(null);

  const [activeFilter, setActiveFilter] = useState("all");
  if (!movieData) {
    return <p>loading</p>;
  }
  return (
    <div className="movie-list">
      <div className="filter-list">
        <div
          name="all"
          className={"all" == activeFilter ? "filter-checked" : null}
          onClick={() => {
            setActiveFilter("all");
          }}
        >
          All
        </div>
        <div
          name="top-ten"
          className={"top-ten" == activeFilter ? "filter-checked" : null}
          onClick={() => {
            setActiveFilter("top-ten");
          }}
        >
          Top Ten
        </div>
        <div>Newest</div>
        <div>2024</div>
        <div>Science Fiction</div>
        <div>Romance</div>
        <div>Movies</div>
        <div>Series</div>
      </div>

      <div className="movies-container">
        {movieData.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="movie-card">
              <img src={movie.poster_path ? moviePictureUrl + movie.poster_path : placeholderImage} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
