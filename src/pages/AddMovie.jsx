import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
export const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [overview, setOverview] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [genre, setGenre] = useState("");
  // const [movieData, setMovieData] = useState(null);

  const nav = useNavigate();

  const handleAddCard = async (e) => {
    e.preventDefault();

    const newMovie = {
      title: title,
      release_date: releaseDate,
      overview: overview,
      poster_path: posterPath,
      genre_ids: [Number(genre)],
    };

    try {
      const res = await fetch(`${API_URL}/movies/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newMovie),
      });

      const parsed = await res.json();
      console.log("Movie was successfully added", parsed);

      nav(`/movie/${parsed.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-movie-page">
      <div>
        <h1>Add a Movie to the Database</h1>
      </div>
      <form onSubmit={handleAddCard} className="add-movie-form">
        <label>
          <div>Title</div>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label>
          <div>Release Date</div>
          <input type="date" placeholder="Release Date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
        </label>

        <label>
          <div>Description</div>
          <textarea cols="30" rows="10" placeholder="Description..." value={overview} onChange={(e) => setOverview(e.target.value)} />
        </label>

        <label>
          <div>Poster Path (URL)</div>
          <input type="text" placeholder="Poster Path" value={posterPath} onChange={(e) => setPosterPath(e.target.value)} />
        </label>

        <label>
          <div>Genres</div>
          <select name="genres" value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">-Select Genre-</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="14">Fantasy</option>
            <option value="36">History</option>
            <option value="27">Horror</option>
            <option value="10402">Music</option>
            <option value="9648">Mystery</option>
            <option value="10749">Romance</option>
            <option value="878">Sci-Fi</option>
            <option value="10770">TV-Movie</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Western</option>
          </select>
        </label>

        <button className="crud-btn">Add Movie</button>
      </form>
    </div>
  );
};
