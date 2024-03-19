import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import testimg from "../assets/imgs/example-movie-poster.jpg";
import harryPotterImg from "../assets/imgs/harry-potter-poster.jpg";
import alienImg from "../assets/imgs/alien-poster.png";

export const SlideExample = () => {
  const images = [testimg, harryPotterImg, alienImg];

  return (
    <>
      <Fade arrows={false}>
        <div className="banner-container">
          <div className="banner" style={{ backgroundImage: `url(${images[0]})` }}></div>
        </div>
        <div className="banner-container">
          <div className="banner" style={{ backgroundImage: `url(${images[1]})` }}></div>
        </div>
        <div className="banner-container">
          <div className="banner" style={{ backgroundImage: `url(${images[2]})` }}></div>
        </div>
      </Fade>
      <div className="banner-overlay-container">
        <h1>Movie Picker</h1>
        <p>Everybodies choice when it comes to picking movies. Let&apos;s find the perfect movie for you!</p>
        <button>Get Started</button>
      </div>
    </>
  );
};
