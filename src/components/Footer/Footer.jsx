import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <div className="footerDiv">
        <Container>
          <Row className="footerDirection">
            <Col className="col-8 mt-4">
              <h2 className="interFontBold" style={{ color: "white" }}>
                Kiril Vandzsurak
              </h2>
              <p interFontLight style={{ color: "white" }}>
                Young and motivated Full-Stack developer. If you have any
                questions, you can contact me using the form above. <br /> With
                big pleasure will answer them!
              </p>
            </Col>
            <Col className="col-4 mt-4">
              <h2 className="interFontLight" style={{ color: "white" }}>
                SOCIAL
              </h2>
              <Container>
                <Row>
                  <Col className="col-3 iconsMargin">
                    <a
                      href="https://github.com/kiril-vandzsurak"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="skillsImg"
                        src={window.location.origin + "/github-9-48.png"}
                        alt="img"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </a>
                  </Col>
                  <Col className="col-3 iconsMargin">
                    <a
                      href="https://www.linkedin.com/in/kiril-vandzsurak-537725217/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="skillsImg"
                        src={window.location.origin + "/linkedin-6-48.png"}
                        alt="img"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </a>
                  </Col>
                  <Col className="col-3 iconsMargin">
                    <a
                      href="https://discord.com/users/454007211853742094"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="skillsImg"
                        src={window.location.origin + "/discord-2-48.png"}
                        alt="img"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </a>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <div className="bottomFooter interFontLight">
            <p>
              Copyright © 2023. Made by{" "}
              <span className="interFontBold">Kiril Vandzsurak</span>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
