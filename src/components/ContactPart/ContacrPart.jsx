import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPart = () => {
  const form = useRef();

  const sendMail = (e) => {
    emailjs
      .sendForm(
        "service_fer6l2p",
        "template_vu2nljv",
        e.target,
        "F9fx63y-nDgFVwM6Y",
        form
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="contactDiv" id="contact">
        <p className="topName">CONTACT ME</p>
        <div className="line"></div>

        <div className="contactBackground">
          <div className="formPosition">
            <Form ref={form} onSubmit={() => sendMail()}>
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
              <button type="submit" className="contactButton">
                Send
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPart;
