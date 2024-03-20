import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import testimg from "../assets/imgs/example-movie-poster.jpg";
import harryPotterImg from "../assets/imgs/harry-potter-poster.jpg";
import alienImg from "../assets/imgs/alien-poster.png";
import MovieList from "../pages/MovieList";
export const MovieBanner = () => {
  const images = [testimg, harryPotterImg, alienImg];
  const [movieBannerImage, setMovieBannerImage] = useState(testimg);

  // const getRandomBanner = (array) => {
  //   const randomIndex = Math.floor(Math.random() * array.length);
  //   console.log(randomIndex);
  //   return array[randomIndex];
  // };
  // const pictureInterval = () => {
  //   getRandomBanner(images);
  //   setInterval(() => {
  //     getRandomBanner(images);
  //   }, 2000);
  // };

  const getBanner = () => {
    const bannerTimer = setTimeout(() => {
      setMovieBannerImage(images.indexOf(movieBannerImage) + 1 >= images.length ? images[0] : images[images.indexOf(movieBannerImage) + 1]);
      console.log(images.indexOf(movieBannerImage));
    }, 6000);
  };

  useEffect(() => {
    getBanner();
  }, [movieBannerImage]);

  return (
    <div className="banner-container">
      <div className="banner" style={{ "--banner-url": `url(${movieBannerImage})` }} />
      <div className="banner-overlay-container">
        <h1>Movie Picker</h1>
        <p>Everybodies choice when it comes to picking movies. Let&apos;s find the perfect movie for you!</p>
        <Link to="/movie-picker">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};
