import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutMe = () => {
  return (
    <div className="aboutMeDiv" id="about">
      <p className="topName">ABOUT ME</p>
      <div className="line"></div>
      <Container style={{ paddingTop: "70px" }}>
        <Row>
          <Col>
            <h3
              style={{ color: "rgb(222, 222, 222)", marginTop: "80px" }}
              className="interFontBold"
            >
              I CREATE{" "}
              <span style={{ color: "rgb(238, 255, 0)" }}>
                FULLY FUNCTIONAL WEB-SITES
              </span>
            </h3>
            <p className="interFontLight infoText">
              Aspiring student of EPICODE Bootcamp, getting experience in
              Full-Stack Development Sphere. Recently, I pivoted my career from
              Computer and Electronic Engineering to Web Development due to my
              passion to creating web-sites and help people unleash their
              fantasies in Web World. Currently, I am finishing a Front-End
              Development part of studying. Next year, I will dive into the
              world of Back-End. On the client-side part, my skills are
              HTML/CSS, JavaScript, DOM Manipulation, Bootstrap, React, Redux
              and Type Script.
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
          <Col className="statsColumn">
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
