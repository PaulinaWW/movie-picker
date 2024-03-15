import genreJson from "../assets/genres.json";
import { Link } from "react-router-dom";

const MovieList = ({ movieData }) => {
  const moviePictureUrl = "https://image.tmdb.org/t/p/w300";

  // const getGenreNames = (genresIds) => {
  //   return genresIds
  //     .map((genreId) => {
  //       const genre = genreJson.find((genre) => genre.id === genreId);
  //       return genre ? genre.name : null;
  //     })
  //     .filter((name) => name !== null)
  //     .join(", ");
  // };

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <div className="movies-container">
        {movieData.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            <img src={moviePictureUrl + movie.poster_path} alt={`Poster of ${movie.title}`} />
            {/* <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.release_date}</p>
              <p>Genres: {getGenreNames(movie.genre_ids)}</p>
              <p>Score: {Math.round(movie.vote_average * 10) / 10}</p>
            </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
