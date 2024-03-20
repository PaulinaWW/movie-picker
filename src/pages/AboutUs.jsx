import githubImg from "../assets/imgs/github-white.png";
import linkedInImg from "../assets/imgs/linkedin.png";

import phillipImg from "../assets/imgs/phillip.jpeg";
import paulinaImg from "../assets/imgs/paulina.jpeg";
import benImg from "../assets/imgs/ben.jpg";

import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-title">
        <h1>About Us</h1>
      </div>
      <div className="member-container">
        <div className="team-member">
          <div>
            <img className="member-img" src={phillipImg} alt="phillip img" />
          </div>
          <div>
            <h3>Phillip Brenndörfer</h3>
          </div>
          <ul className="team-socials">
            <li>
              <Link to="https://github.com/Brenni1" target="_blank">
                <img className="img-social" src={githubImg} alt="image github" />
                <div>GitHub</div>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/phillip-brenndoerfer/" target="_blank">
                <img className="img-social" src={linkedInImg} alt="image linkedin" />
                <div>LinkedIn</div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="team-member">
          <div>
            <img className="member-img" src={benImg} alt="phillip img" />
          </div>
          <div>
            <h3>Benjamin Friedman</h3>
          </div>
          <ul className="team-socials">
            <li>
              <Link to="https://github.com/bendfriedman" target="_blank">
                <img className="img-social" src={githubImg} alt="image github" />
                <div>GitHub</div>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/benjamindfriedman/" target="_blank">
                <img className="img-social" src={linkedInImg} alt="image linkedin" />
                <div>LinkedIn</div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="team-member">
          <div>
            <img className="member-img" src={paulinaImg} alt="phillip img" />
          </div>
          <div>
            <h3>Paulina Wilk</h3>
          </div>
          <ul className="team-socials">
            <li>
              <Link to="https://github.com/PaulinaWW" target="_blank">
                <img className="img-social" src={githubImg} alt="image github" />
                <div>GitHub</div>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/paulawilk/" target="_blank">
                <img className="img-social" src={linkedInImg} alt="image linkedin" />
                <div>LinkedIn</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
