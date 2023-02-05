const HomePart = () => {
  return (
    <div className="backgroundHomePart" id="home">
      <img
        className="imgCover"
        src={window.location.origin + "/background.jpg"}
        alt="img"
      />
      <div className="centerJumbotronInscription ">
        <h1
          className="interFontBold"
          style={{
            fontSize: "50px",
            paddingTop: "40px",
            color: "rgb(222, 222, 222)",
          }}
        >
          Hi! I'm Kiril Vandzsurak
        </h1>
        <p
          style={{ fontSize: "20px", color: "rgb(222, 222, 222)" }}
          className="interFontLight"
        >
          Young and motivated Full-Stack developer
        </p>
        <button className="buttonStyle interFontBold">
          Here you will find my CV
        </button>{" "}
        <div className="mouse">
          <div className="mouseDot"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePart;
