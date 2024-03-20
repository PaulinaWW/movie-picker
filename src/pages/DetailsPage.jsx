import { useParams } from "react-router";
import genreJson from "../assets/genres.json";
import { useNavigate } from "react-router-dom";
import placeholder from "../assets/imgs/placeholder.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
export const DetailsPage = () => {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();
  const placeholderImage = placeholder;
  const moviePictureUrl = "https://image.tmdb.org/t/p/w500";
  const nav = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch(`${API_URL}/movies/${id}`);
        const parsedRes = await res.json();
        setMovieData(parsedRes);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, [id]);

  const getGenreNames = (movieData, genreJson) => {
    const genreNames = [];

    if (movieData.genre_ids) {
      movieData.genre_ids.forEach((genreId) => {
        const genre = genreJson.find((genre) => genre.id == genreId);
        if (genre) {
          genreNames.push(genre.name);
        }
      });
    }

    return genreNames;
  };

  // Delete Button

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/movies/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.log(err);
    }
    nav("/");
  };

  if (!movieData) {
    return <p>loading</p>;
  }

  return (
    <div className="movie-details-page">
      {movieData && (
        <div className="movie-details-card">
          <div className="movie-details-col1">
            <img
              src={movieData.poster_path ? moviePictureUrl + movieData.poster_path : placeholderImage}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = movieData.poster_path;
              }}
            />
          </div>
          <div className="movie-details-col2">
            <h1>{movieData.title}</h1>
            <div>
              <h4>Release Date:</h4>
              <p>{movieData.release_date}</p>
            </div>
            {/* .release_date.toLocaleDateString("en-GB") */}
            <div>
              <h4>General Information</h4>
              <p>{movieData.overview}</p>
            </div>
            {movieData.vote_average && (
              <div>
                <h4>ReviewScore</h4>
                <p>{Math.round(movieData.vote_average * 100) / 100}</p>
              </div>
            )}
            <div>
              <h4>Genres</h4>
              <p>{getGenreNames(movieData, genreJson).join(", ")}</p>
            </div>
            <div className="crud-btn-container">
              <button
                className="crud-btn"
                onClick={() => {
                  handleDelete(movieData.id);
                  console.log("movie deleted");
                }}
              >
                Delete Movie
              </button>
              <Link to={`/edit-movie/${id}`}>
                <button className="crud-btn">Edit</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
