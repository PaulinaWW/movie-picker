import React, { useState, useEffect } from "react-router";
import genreJson from "../assets/genres.json";
export const MovieList = () => {
  return (
    <div>MovieList</div>
  )
const[movies, setMovies] = useState([]);
}
useEffect(() => {
    console.log('render')
    const fetchData 
    setMovies(fetchedMovies);
  }, []);

    fetch "../assets/genres.json"


      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            {/* Add more movie details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

