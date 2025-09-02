import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adebola Clement</span>
            <h2
              style={{
                fontSize: "20px",
                textAlign: "justify",
                display: "flex",
                gap: "10px",
              }}
            >
              {" "}
              A.K.A <p className="purple"> Ziongate</p>
            </h2>
            from <span className="purple"> Akure, Nigeria.</span>
            <br />I am currently employed as a software developer at Juspay.
            {/* <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Graphic design
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning more things
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">ziongate</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
