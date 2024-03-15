import { useParams } from "react-router";
import genreJson from "../assets/genres.json";
import { useNavigate } from "react-router-dom";
import placeholder from "../assets/imgs/placeholder.jpg";
export const DetailsPage = ({ movieData, setMovieData }) => {
  const { id } = useParams();
  const placeholderImage = placeholder;
  const movieProfile = movieData.find((movie) => movie.id == id);
  const moviePictureUrl = "https://image.tmdb.org/t/p/w500";
  console.log("the movie id after finding is ", id, "the movieData", movieData);
  const nav = useNavigate();

  const getGenreNames = (movieProfile, genreJson) => {
    const genreNames = [];

    // console.log("This is the movieProfile", movieProfile);
    // console.log("This is the rawData", genreJson);
    if (movieProfile.genre_ids) {
      movieProfile.genre_ids.forEach((genreId) => {
        const genre = genreJson.find((genre) => genre.id == genreId);
        if (genre) {
          genreNames.push(genre.name);
        }
      });
    }
    // console.log("This is the filtered Genre Names", genreNames);
    return genreNames;
  };
  const genreNames = getGenreNames(movieProfile, genreJson);

  // console.log("This is the genreNames", genreNames);

  // Delete Button

  const handleDelete = (id) => {
    console.log("Deleting movie with id:", id);
    console.log(
      "Movie data IDs:",
      movieData.map((movie) => movie.id)
    );
    const filteredMovies = movieData.filter((movieFilter) => movieFilter.id !== id);
    console.log("Filtered movies:", filteredMovies);
    setMovieData(filteredMovies);
    nav("/add-movie");
  };

  return (
    <div className="movie-details-page">
      <h1>MovieDetailsPage</h1>
      {movieProfile && (
        <div className="movie-details-card">
          <br />
          <img
            src={movieProfile.poster_path ? moviePictureUrl + movieProfile.poster_path : placeholderImage}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = movieProfile.poster_path;
            }}
          />
          <p></p>
          <h3>Title:</h3> <strong>{movieProfile.title}</strong>
          <p></p>
          Release Date: <h2>{movieProfile.release_date}</h2>
          <p></p>
          <h1>General Information:</h1> {movieProfile.overview}
          <p></p>
          {movieProfile.vote_average && (
            <div>
              <h4>ReviewScore:</h4> {Math.round(movieProfile.vote_average * 100) / 100}
            </div>
          )}
          <p></p>
          <strong>Genres: {genreNames.join(", ")}</strong>
          <p />
          <button
            onClick={() => {
              handleDelete(movieProfile.id);
              console.log("movie deleted");
            }}
          >
            Delete Object
          </button>
        </div>
      )}
    </div>
  );
};
