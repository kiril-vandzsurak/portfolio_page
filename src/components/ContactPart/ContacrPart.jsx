import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPart = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fer6l2p",
        "template_vu2nljv",
        form.current,
        "F9fx63y-nDgFVwM6Y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contactDiv" id="contact">
        <p className="topName">CONTACT ME</p>
        <div className="line"></div>

        <div className="contactBackground">
          <div className="formPosition">
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group>
                <Form.Control
                  style={{
                    borderRadius: "0px",
                    marginBottom: "25px",
                    marginTop: "60px",
                  }}
                  type="text"
                  name="user_name"
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  style={{ borderRadius: "0px" }}
                  type="email"
                  name="user_email"
                  placeholder="Email"
                />
              </Form.Group>

              <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control
                  name="message"
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
              <input className="contactButton" type="submit" value="Send" />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPart;
