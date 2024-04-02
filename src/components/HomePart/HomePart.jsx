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
<<<<<<< Updated upstream
          href="https://drive.google.com/file/d/1t5YoEpTydbQjAIjUFH8VWuvyPaB0XIJK/view?usp=sharing"
=======
          href="https://drive.google.com/file/d/1OVP5nZY-NsxCU091Jq74XXz_K4OKHEgj/view?usp=drive_link"
>>>>>>> Stashed changes
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
