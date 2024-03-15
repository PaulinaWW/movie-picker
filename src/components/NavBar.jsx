import { Link } from "react-router-dom";
import clapperBoardlogo from "../assets/imgs/clapperboard.png";

export const NavBar = () => {
  return (
    <div>
      <nav className="nav-header">
        <div>
          <img className="nav-logo" src={clapperBoardlogo} alt="logo" />
        </div>
        <Link to="/">
          <div className="nav-text">Home</div>
        </Link>
        <Link to="/">
          <div className="nav-text">All Movies</div>
        </Link>
        <Link to="/">
          <div className="nav-text">Movie Picker</div>
        </Link>
      </nav>
    </div>
  );
};
