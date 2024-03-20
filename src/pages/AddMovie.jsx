import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
export const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [overview, setOverview] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [genre, setGenre] = useState("");
  const [movieData, setMovieData] = useState(null);

  const nav = useNavigate();

  const handleAddCard = async (e) => {
    e.preventDefault();

    const newMovie = {
      title: title,
      release_date: releaseDate,
      overview: overview,
      poster_path: posterPath,
      genre_ids: [genre],
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

  const handleResetDB = async () => {
    try {
      const res = await fetch(`${API_URL}/movies-backup`);
      const parsedRes = await res.json();
      setMovieData(parsedRes);
      console.log("This is the ", movieData);

      try {
        const res = await fetch(`${API_URL}/movies/`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(movieData),
        });

        const parsed = await res.json();
        console.log("Movie was successfully updated", parsed);

        nav("/");
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
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
        <button className="crud-btn">Add Movie</button>
      </form>
      <button className="crud-btn" onClick={handleResetDB}>
        RESET DB
      </button>
    </div>
  );
};
