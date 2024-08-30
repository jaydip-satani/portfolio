import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jaydip Satani </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            I am currently pursuing B-Tech CSE at Nirma University.
            <br />
            I have completed Diploma in CE at CUSP surendranagar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Create with purpose, aiming to make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Jaydip</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
