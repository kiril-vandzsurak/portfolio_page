import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

const MyNavbar = () => {
  // const handleClickScroll = () => {
  //   const element = document.getElementById('section-1');
  //   if (element) {
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div className="sticky">
      <Navbar style={{ backgroundColor: "rgb(22, 23, 27)" }} expand="lg">
        <Container className="d-flex justify-content-between">
          <Row>
            <Col
              className="interFontBold"
              style={{ color: "rgb(222, 222, 222)", cursor: "pointer" }}
            >
              <span style={{ color: "rgb(238, 255, 0)" }}>FS</span> FOREVER
            </Col>
          </Row>
          <Row>
            <Col>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                className="centerNavbarInscription"
                id="basic-navbar-nav"
              >
                <Nav className="me-auto" style={{ marginLeft: "auto" }}>
                  <Nav.Link
                    href="#home"
                    style={{ color: "rgb(222, 222, 222)" }}
                  >
                    <Link to="home" spy={true} className="linkDecoration">
                      HOME
                    </Link>
                  </Nav.Link>
                  <Nav.Link
                    href="#link"
                    style={{ width: "94px", color: "rgb(222, 222, 222)" }}
                  >
                    <Link to="about" spy={true} className="linkDecoration">
                      ABOUT ME
                    </Link>
                  </Nav.Link>
                  <Nav.Link
                    href="#link"
                    style={{ color: "rgb(222, 222, 222)" }}
                  >
                    <Link to="projects" spy={true} className="linkDecoration">
                      PROJECTS
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
