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
              style={{ color: "rgb(222, 222, 222)" }}
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
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
