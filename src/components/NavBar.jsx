import { Link } from "react-router-dom";
// import reactLogo from "../assets/react.svg";
import clapperBoardlogo from "../assets/imgs/clapperboard.png"; //Phillip added the image to the folder

export const NavBar = () => {
  return (
    <div>
      <nav className="nav-header">
        <div>
          <img className="nav-logo" src={clapperBoardlogo} alt="logo" />
        </div>
        <Link to="/">
          <div className="nav-text">All Movies</div>
        </Link>
        <Link to="/movie-picker">
          <div className="nav-text">Movie Picker</div>
        </Link>
        <Link to="/add-movie">
          <div className="nav-text">Add Movie</div>
        </Link>
        <Link to="/about-us">
          <div className="nav-text">About Us</div>
        </Link>
      </nav>
      <div className="nav-empty-space"></div>
    </div>
  );
};
