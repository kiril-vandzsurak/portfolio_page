import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <div className="footerDiv">
        <Container>
          <Row>
            <Col>
              <h2>Kiril Vandzsurak</h2>
              <p>Young and motivated Full-Stack developer</p>
            </Col>
            <Col>
              <h2>SOCIAL</h2>
              <a href="google.com">
                <img
                  className="skillsImg"
                  src={window.location.origin + "/github-9-48.png"}
                  alt="img"
                  style={{ width: "50px", height: "50px" }}
                />
              </a>
              <a href="google.com">
                <img
                  className="skillsImg"
                  src={window.location.origin + "/linkedin-6-48.png"}
                  alt="img"
                  style={{ width: "50px", height: "50px" }}
                />
              </a>
              <a href="google.com">
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
      </div>
    </>
  );
};

export default Footer;
