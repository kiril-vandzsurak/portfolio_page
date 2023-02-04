import Button from "react-bootstrap/Button";

const HomePart = () => {
  return (
    <div className="backgroundHomePart ">
      <div className="centerJumbotronInscription ">
        <h1
          className="interFontBold"
          style={{ fontSize: "50px", paddingTop: "40px" }}
        >
          Hi! I'm Kiril Vandzsurak
        </h1>
        <p style={{ fontSize: "20px" }} className="interFontLight">
          Young and motivated Full-Stack developer
        </p>
        <Button style={{ marginTop: "20px" }} size="lg">
          Here you will find my CV
        </Button>{" "}
        <div className="mouse">
          <div className="mouseDot"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePart;
