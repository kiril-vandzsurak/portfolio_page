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
                  style={{ objectFit: "cover" }}
                  className="projectPhoto"
                  src={window.location.origin + "/LinkedInScreen.png"}
                  alt="img"
                />
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div className="singleProjectDescription interFontLight">
                <h3 className="interFontBold h3ProjectName">LinkedIn Clone</h3>
                <p className="projectDescription">
                  LinkedIn project built on React.js, Redux and Bootstrap 5.
                  Recently created database on MongoDB. Feel free to check my
                  GitHub profile
                </p>
                <a
                  className="buttonProject"
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
                  style={{ objectFit: "cover" }}
                  className="projectPhoto"
                  src={window.location.origin + "/SpotifyClone.png"}
                  alt="img"
                />
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div className="singleProjectDescription interFontLight">
                <h3 className="interFontBold h3ProjectName">Spotify Clone</h3>
                <p className="projectDescription">
                  Spotify clone is a project which was created to test skills of
                  styling web pages. Furhtermore, some JS is used here (Playable
                  songs, clickable artists and albums etc.)
                </p>
                <a
                  className="buttonProject"
                  href="https://github.com/kiril-vandzsurak/fs0422-build-week-2"
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
                  src={window.location.origin + "/Socket.png"}
                  alt="img"
                />
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div className="singleProjectDescription interFontLight">
                <h3 className="interFontBold h3ProjectName">
                  Mini Chat (Socket.io)
                </h3>
                <p className="projectDescription">
                  Here you can see a mini full-stack project called mini chat.
                  In this project you can login with your name to the chat and
                  text with other people! In addition, do not forget to check
                  out backend code of this application!
                </p>
                <a
                  className="buttonProject"
                  href="https://github.com/kiril-vandzsurak/epicode-u5-d13-hw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend Code
                </a>
                <a
                  className="buttonProject"
                  href="https://github.com/kiril-vandzsurak/socket_io_be"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: "10px" }}
                >
                  Backend Code
                </a>
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <div>
                <img
                  style={{ objectFit: "cover" }}
                  className="projectPhoto"
                  src={window.location.origin + "/Portfolio.png"}
                  alt="img"
                />
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div className="singleProjectDescription interFontLight">
                <h3 className="interFontBold h3ProjectName">
                  Portfolio Webpage
                </h3>
                <p className="projectDescription">
                  My personal portfolio website built on React.js, Bootstrap 5
                  and CSS. As well, it's fully responsive from mobile device to
                  wide computers screen
                </p>
                <a
                  className="buttonProject"
                  href="https://github.com/kiril-vandzsurak/portfolio_page"
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
