import testimg from "../assets/imgs/example-movie-poster.jpg";

export const MovieBanner = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6) , rgba(0, 0, 0, 0.3) ), url(${testimg})`,
  };
  return (
    <div className="banner-container">
      <div className="banner" style={backgroundStyle}>
        <div className="banner-overlay-container">
          <h1>Movie Picker</h1>
          <p>Everybodies choice when it comes to picking movies. Let&apos;s find the perfect movie for you!</p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};
