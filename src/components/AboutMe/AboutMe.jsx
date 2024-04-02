import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutMe = () => {
  return (
    <div className="aboutMeDiv" id="about">
      <p className="topName">ABOUT ME</p>
      <div className="line"></div>
      <Container style={{ paddingTop: "70px" }}>
        <Row className="directionAbout">
          <Col>
            <h3 className="interFontBold h3About">
              I CREATE{" "}
              <span style={{ color: "rgb(238, 255, 0)" }}>
                FULLY FUNCTIONAL WEB-SITES
              </span>
            </h3>
            <p className="interFontLight infoText">
              Currently residing in Warsaw, I am a first-year student at the
              Polish-Japanese Academy of Informational Technology. Having
              graduated from a Full-Stack development course in 2023, I bring a
              strong foundation in web development and a passion for learning
              new technologies.
            </p>
            <div className="horizontalLine"></div>
            <h3 className="interFontBold skillsInscription">SKILLS</h3>
            <Container>
              <Row className="flex-column">
                <Col>
                  <img
                    className="skillsImg"
                    src={window.location.origin + "/html.png"}
                    alt="img"
                  />
                  <img
                    className="skillsImg"
                    src={window.location.origin + "/css.png"}
                    alt="img"
                  />
                  <img
                    className="skillsImg"
                    src={window.location.origin + "/git.png"}
                    alt="img"
                  />
                </Col>
                <Col>
                  <img
                    className="skillsImg"
                    src={window.location.origin + "/js.png"}
                    alt="img"
                  />
                  <img
                    className="skillsImg"
                    src={window.location.origin + "/nodejs.png"}
                    alt="img"
                  />
                  <img
                    className="skillsImg"
                    src={window.location.origin + "/react.png"}
                    alt="img"
                  />
                </Col>
                <Col>
                  <img
                    className="skillsImg"
                    src={window.location.origin + "/redux.png"}
                    alt="img"
                  />
                  <img
                    className="skillsImg"
                    src={window.location.origin + "/ts.png"}
                    alt="img"
                  />
                  <img
                    className="skillsImg"
                    src={window.location.origin + "/bootstrap.png"}
                    alt="img"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <img
              className="backgroundAbout"
              src={window.location.origin + "/bigImg.png"}
              alt="img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
