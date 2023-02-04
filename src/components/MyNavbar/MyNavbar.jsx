import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../";

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Row>
            <Col>
              <div className="navbarImg"></div>
            </Col>
            <Col>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{ marginLeft: "auto" }}>
                  <Nav.Link href="#home">HOME</Nav.Link>
                  <Nav.Link href="#link">ABOUT ME</Nav.Link>
                  <Nav.Link href="#link">PROJECTS</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
