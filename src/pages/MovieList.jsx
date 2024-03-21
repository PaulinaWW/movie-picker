// import genreJson from "../assets/genres.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import placeholderImage from "../assets/imgs/placeholder.jpg";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
import genreJson from "../assets/genres.json";

const MovieList = () => {
  const [movieData, setMovieData] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenreID, setSelectedGenreID] = useState("all");
  const [activeFilter, setActiveFilter] = useState("All");
  const moviePictureUrl = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch(`${API_URL}/movies`);
        const parsedRes = await res.json();
        if (parsedRes) {
          setMovieData(parsedRes);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, []);

  useEffect(() => {
    if (movieData) {
      if (selectedGenreID === "all") {
        setFilteredMovies(movieData);
      } else {
        const filtered = movieData.filter((movie) => movie.genre_ids.includes(selectedGenreID));
        setFilteredMovies(filtered);
      }
    }
  }, [movieData, selectedGenreID]);

  if (!movieData) {
    return <p>loading</p>;
  }
  return (
    <div className="movie-list">
      <div className="filter-list">
        <div
          name="all"
          className={`genre-div ${selectedGenreID === "all" ? "filter-checked" : null}`}
          onClick={() => {
            setActiveFilter("All");
            setSelectedGenreID("all");
            console.log("All selected", filteredMovies);
          }}
        >
          All
        </div>

        {genreJson.map((genre) => (
          <div
            key={genre.id}
            className={`genre-div ${selectedGenreID === genre.id ? "filter-checked" : null}`}
            onClick={() => {
              setSelectedGenreID(genre.id);
              setActiveFilter(genre.name);
              console.log("Genre selected", activeFilter, selectedGenreID, filteredMovies);
            }}
          >
            {genre.name}
          </div>
        ))}
      </div>
      <div className="movies-container">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <div className="movie-card">
                <img
                  src={movie.poster_path ? moviePictureUrl + movie.poster_path : placeholderImage}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = movie.poster_path;
                  }}
                />
              </div>
            </Link>
          ))
        ) : (
          <p>No movies found for this genre.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
