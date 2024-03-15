import "./App.css";

import moviesJson from "./assets/movies.json";
import { DetailsPage } from "./pages/DetailsPage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NavBar } from "./components/NavBar";
import { MovieBanner } from "./components/MovieBanner";
import MovieList from "./pages/MovieList";
import { AddMovie } from "./pages/AddMovie";

function App() {
  const [movieData, setMovieData] = useState(moviesJson);

  return (
    <>
      <NavBar />

      <Routes>
        {/* <Route path="/" element={} /> */}
        <Route
          path="/"
          element={
            <>
              <MovieBanner />
              <MovieList movieData={movieData} setMovieData={setMovieData} />
            </>
          }
        />
        <Route path="/movie/:id" element={<DetailsPage movieData={movieData} setMovieData={setMovieData} />} />
        <Route path="/moviepicker" element={MovieBanner} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/add-movie" element={<AddMovie movieData={movieData} setMovieData={setMovieData} />} />
      </Routes>
    </>
  );
}

export default App;
