import "./App.css";
import { DetailsPage } from "./pages/DetailsPage";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NavBar } from "./components/NavBar";
import { MovieBanner } from "./components/MovieBanner";
import MovieList from "./pages/MovieList";
import { AddMovie } from "./pages/AddMovie";
import { EditPage } from "./pages/EditPage";
import { MoviePicker } from "./pages/MoviePicker";
import { AboutUs } from "./pages/AboutUs";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MovieBanner /> <MovieList />
            </>
          }
        />
        <Route path="/movie/:id" element={<DetailsPage />} />
        <Route path="/edit-movie/:id" element={<EditPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/movie-picker" element={<MoviePicker />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
