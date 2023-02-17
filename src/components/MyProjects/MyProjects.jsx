import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyProjects = () => {
  return (
    <>
      <div className="projectsDiv" id="projects">
        <h2 className="topName">PROJECTS</h2>
        <div className="line" style={{ marginTop: "17px" }}></div>
        <div
          className="interFontBold"
          style={{
            marginTop: "50px",
            color: "rgb(222, 222, 222)",
            marginBottom: "80px",
          }}
        >
          <p style={{ fontSize: "25px" }}>
            Here you will find my best projects created by me and our team
          </p>
        </div>
        <Container>
          <Row className="mb-5">
            <Col>
              <div>
                <img
                  className="projectPhoto"
                  src={window.location.origin + "/HomeImg.jpg"}
                  alt="img"
                />
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div className="singleProjectDescription interFontLight">
                <h3
                  className="interFontBold"
                  style={{ color: "rgb(238, 255, 0)" }}
                >
                  LinkedIn Clone
                </h3>
                <p>
                  LinkedIn project built on React.js, Redux and Bootstrap 5.
                  Recently created database on MongoDB. Feel free to check my
                  GitHub profile
                </p>
                <a
                  className="buttonProject "
                  href="https://github.com/kiril-vandzsurak/LinkedIn-Clone-Proj"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check it out!
                </a>
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <div>
                <img
                  className="projectPhoto"
                  src={window.location.origin + "/HomeImg.jpg"}
                  alt="img"
                />
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div className="singleProjectDescription interFontLight">
                <h3
                  className="interFontBold"
                  style={{ color: "rgb(238, 255, 0)" }}
                >
                  LinkedIn Clone
                </h3>
                <p>
                  LinkedIn project built on React.js, Redux and Bootstrap 5.
                  Recently created database on MongoDB. Feel free to check my
                  GitHub profile
                </p>
                <a
                  className="buttonProject "
                  href="https://github.com/kiril-vandzsurak/LinkedIn-Clone-Proj"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check it out!
                </a>
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <div>
                <img
                  className="projectPhoto"
                  src={window.location.origin + "/HomeImg.jpg"}
                  alt="img"
                />
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div className="singleProjectDescription interFontLight">
                <h3
                  className="interFontBold"
                  style={{ color: "rgb(238, 255, 0)" }}
                >
                  LinkedIn Clone
                </h3>
                <p>
                  LinkedIn project built on React.js, Redux and Bootstrap 5.
                  Recently created database on MongoDB. Feel free to check my
                  GitHub profile
                </p>
                <a
                  className="buttonProject "
                  href="https://github.com/kiril-vandzsurak/LinkedIn-Clone-Proj"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check it out!
                </a>
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <div>
                <img
                  className="projectPhoto"
                  src={window.location.origin + "/HomeImg.jpg"}
                  alt="img"
                />
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div className="singleProjectDescription interFontLight">
                <h3
                  className="interFontBold"
                  style={{ color: "rgb(238, 255, 0)" }}
                >
                  LinkedIn Clone
                </h3>
                <p>
                  LinkedIn project built on React.js, Redux and Bootstrap 5.
                  Recently created database on MongoDB. Feel free to check my
                  GitHub profile
                </p>
                <a
                  className="buttonProject "
                  href="https://github.com/kiril-vandzsurak/LinkedIn-Clone-Proj"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check it out!
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyProjects;
