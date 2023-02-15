import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactPart = () => {
  return (
    <>
      <div className="contactPart">
        <img
          className="backgroundContact"
          src={window.location.origin + "/contact.jpg"}
          alt="img"
        />

        <p
          style={{ display: "block", position: "absolute", top: "-20px" }}
          className="topName contactPosition"
        >
          CONTACT ME
        </p>

        <div className="contactForm">
          <Form>
            <Form.Group className="mb-3 borders" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ContactPart;
