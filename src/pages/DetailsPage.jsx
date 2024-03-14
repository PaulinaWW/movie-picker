import { useParams } from "react-router";
import genreJson from "../assets/genres.json";
export const DetailsPage = ({ movieData }) => {
  const { id } = useParams();
  const movieProfile = movieData.find((movie) => movie.id == id);
  const moviePictureUrl = "https://image.tmdb.org/t/p/w300";

  const getGenreNames = (movieProfile, genreJson) => {
    const genreNames = [];
    console.log("This is the movieProfile", movieProfile);
    console.log("This is the rawData", genreJson);

    movieProfile.genre_ids.forEach((genreId) => {
      const genre = genreJson.find((genre) => genre.id === genreId);
      if (genre) {
        genreNames.push(genre.name);
      }
    });

    console.log("This is the filtered Genre Names", genreNames);
    return genreNames;
  };
  const genreNames = getGenreNames(movieProfile, genreJson);

  console.log("This is the genreNames", genreNames);

  return (
    <div className="movie-details-page">
      <h1>MovieDetailsPage</h1>
      {movieProfile && (
        <div className="movie-details-card">
          <p></p>
          <h3>Title:</h3> <strong>{movieProfile.title}</strong>
          <p></p>
          Release Date: <h2>{movieProfile.release_date}</h2>
          <p></p>
          <h1>General Information:</h1> {movieProfile.overview}
          <p></p>
          <h4>ReviewScore:</h4> {Math.round(movieProfile.vote_average * 100) / 100}
          <p></p>
          <img src={moviePictureUrl.concat("", movieProfile.poster_path)}></img>
          <p></p>
          <strong>Genres: {genreNames.join(", ")}</strong>
        </div>
      )}
    </div>
  );
};
