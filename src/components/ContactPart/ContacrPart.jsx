import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const ContactPart = () => {
  return (
    <>
      <div className="contactDiv">
        <p className="topName">CONTACT ME</p>
        <div className="line"></div>

        <div className="contactBackground">
          <div className="formPosition">
            <Form>
              <Form.Group>
                <Form.Control
                  style={{
                    borderRadius: "0px",
                    marginBottom: "25px",
                    marginTop: "60px",
                  }}
                  type="name"
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  style={{ borderRadius: "0px" }}
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{
                    height: "100px",
                    resize: "none",
                    marginTop: "40px",
                    borderRadius: "0px",
                    marginBottom: "20px",
                  }}
                />
              </FloatingLabel>
              <button className="contactButton">Send</button>
            </Form>
          </div>
        </div>

        {/* <div className="contactForm">
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
        </div> */}
      </div>
    </>
  );
};

export default ContactPart;
