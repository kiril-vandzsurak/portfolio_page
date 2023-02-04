import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../";

const MyNavbar = () => {
  return (
    <div className="sticky">
      <Navbar style={{ backgroundColor: "rgb(73, 70, 70)" }} expand="lg">
        <Container className="d-flex justify-content-between">
          <Row>
            <Col>
              <div className="navbarImg">
                <img
                  className="imgCoverNavbar"
                  src={window.location.origin + "/MyPhoto.jpg"}
                  alt="img"
                />
              </div>
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
                    HOME
                  </Nav.Link>
                  <Nav.Link
                    href="#link"
                    style={{ width: "94px", color: "rgb(222, 222, 222)" }}
                  >
                    ABOUT ME
                  </Nav.Link>
                  <Nav.Link
                    href="#link"
                    style={{ color: "rgb(222, 222, 222)" }}
                  >
                    PROJECTS
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
