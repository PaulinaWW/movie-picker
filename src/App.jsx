import "./App.css";
import { DetailsPage } from "./pages/DetailsPage";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NavBar } from "./components/NavBar";
import { MovieBanner } from "./components/MovieBanner";
import MovieList from "./pages/MovieList";
import { AddMovie } from "./pages/AddMovie";

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
        <Route path="/moviepicker" element={MovieBanner} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
    </>
  );
}

export default App;
