const HomePart = () => {
  return (
    <div className="backgroundHomePart" id="home">
      <img
        className="imgCover"
        src={window.location.origin + "/background.jpg"}
        alt="img"
      />
      <div className="centerJumbotronInscription ">
        <h1 className="interFontBold h1Home">Hi! I'm Kiril Vandzsurak</h1>
        <p className="interFontLight pHome">
          Young and motivated Full-Stack developer
        </p>
        <a
          href="https://drive.google.com/file/d/1mT5OEplgN1tWpasInKRi7oV-5HdDPOEF/view?usp=sharing"
          //link to my CV
          target="_blank"
          rel="noreferrer"
        >
          <button className="buttonStyle interFontBold">
            Here you will find my CV
          </button>{" "}
        </a>
        <div className="mouse">
          <div className="mouseDot"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePart;
