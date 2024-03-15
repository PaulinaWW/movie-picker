// import genreJson from "../assets/genres.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import placeholderImage from "../assets/imgs/placeholder.jpg";

const MovieList = ({ movieData }) => {
  const moviePictureUrl = "https://image.tmdb.org/t/p/w300";
  const [movieFilter, setMovieFilter] = useState(movieData);

  const [activeFilter, setActiveFilter] = useState("all");

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
        {movieFilter.map((movie) => (
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
