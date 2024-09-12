import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Helmet>
        <title>Jaydip Satani - About Me</title>
        <meta name="description" content="Learn more about Jaydip Satani, a software developer skilled in React.js, JavaScript, and web technologies. Explore his professional skills, tools, and GitHub projects." />
        <meta name="keywords" content="Jaydip Satani, About, Software Developer, React.js, JavaScript, Web Development, GitHub" />
        <meta property="og:title" content="Jaydip Satani - About Me" />
        <meta property="og:description" content="Learn more about Jaydip Satani, a software developer skilled in React.js, JavaScript, and web technologies." />
        <meta property="og:image" content="https://jaydipsatani.com/readme-img.png" />
        <meta property="og:url" content="https://jaydipsatani.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Jaydip Satani - About Me" />
        <meta name="twitter:description" content="Learn more about Jaydip Satani, a software developer skilled in React.js, JavaScript, and web technologies." />
        <meta name="twitter:image" content="https://jaydipsatani.com/readme-img.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
