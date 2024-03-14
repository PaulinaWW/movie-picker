import "./App.css";

import moviesJson from "./assets/movies.json";
import { DetailsPage } from "./pages/DetailsPage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NavBar } from "./components/NavBar";
import { MovieBanner } from "./components/MovieBanner";

function App() {
  const [movieData] = useState(moviesJson);

  return (
    <>
      <NavBar />
      <MovieBanner />
      <Routes>
        <Route path="/" />
        <Route path="/movie/:id" element={<DetailsPage movieData={movieData} />} />
        <Route path="/moviepicker" element={MovieBanner} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
