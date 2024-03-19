import { useParams } from "react-router";
import genreJson from "../assets/genres.json";
import { useNavigate } from "react-router-dom";
import placeholder from "../assets/imgs/placeholder.jpg";
import { useState, useEffect } from "react";

export const EditPage = () => {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();
  const placeholderImage = placeholder;

  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [overview, setOverview] = useState("");
  // const [posterPath, setPosterPath] = useState("");
  // const [genre, setGenre] = useState("");

  const moviePictureUrl = "https://image.tmdb.org/t/p/w500";
  const nav = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch(`http://localhost:5000/movies/${id}`);
        const parsedRes = await res.json();
        setMovieData(parsedRes);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, [id]);

  useEffect(() => {
    if (movieData) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieData]);

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

  const loadData = () => {
    setTitle(movieData.title);
    setReleaseDate(movieData.release_date);
    setOverview(movieData.overview);
    // setGenre(movieData.genre_ids);
    // setPosterPath(movieData.poster_path)
  };

  const handleEditMovie = async (e) => {
    e.preventDefault();
    const editedMovie = {
      title: title,
      release_date: releaseDate,
      overview: overview,
      poster_path: movieData.poster_path,
      genre_ids: movieData.genre_ids,
    };

    try {
      const res = await fetch(`http://localhost:5000/movies/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(editedMovie),
      });

      const parsed = await res.json();
      console.log("Movie was successfully changed", parsed);

      nav(`/movie/${parsed.id}`);
    } catch (err) {
      console.log(err);
    }
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

          <form className="movie-details-col2" onSubmit={handleEditMovie}>
            <label>
              <h4>Title:</h4>
              <input name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
              <h4>Release Date:</h4>
              <input name="release date" type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
            </label>
            <label>
              <h4>General Information:</h4>
              <textarea cols="30" rows="10" value={overview} onChange={(e) => setOverview(e.target.value)} />
            </label>
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
              <button className="crud-btn">Confirm Edit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
