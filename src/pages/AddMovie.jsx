import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddMovie = ({ movieData, setMovieData }) => {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [overview, setOverview] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [genre, setGenre] = useState("");

  const nav = useNavigate();

  const handleAddCard = (e) => {
    e.preventDefault();

    const newMovie = {
      title: title,
      release_date: releaseDate,
      overview: overview,
      poster_path: posterPath,
      genre_ids: [genre],
      id: movieData.length + 1,
    };

    setMovieData([newMovie, ...movieData]);
    nav(`/movie/${newMovie.id}`);
  };

  return (
    <div>
      <div>Add Movie</div>
      <form onSubmit={handleAddCard} className="add-movie-form">
        <label>
          <div>Title</div>
          <br />
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          <div>Release Date</div>
          <br />
          <input type="text" placeholder="Release Date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
        </label>
        <label>
          <div>Description</div>
          <br />
          <input type="text" placeholder="Overview" value={overview} onChange={(e) => setOverview(e.target.value)} />
        </label>
        <label>
          <div>Poster Path - Please provide URL</div>
          <br />
          <input type="text" placeholder="Poster Path" value={posterPath} onChange={(e) => setPosterPath(e.target.value)} />
        </label>
        <label>
          <div>Genres</div>
          <br />
          <select name="genres" value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">-Select Genre-</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
          </select>
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
};
