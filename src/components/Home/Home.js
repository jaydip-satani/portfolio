import React from "react";
import { Helmet } from "react-helmet";  // Import Helmet for SEO
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Helmet>
        <title>Jaydip Satani - Developer Portfolio</title>
        <meta name="description" content="Jaydip Satani's personal website showcasing development skills and projects using React.js." />
        <meta name="keywords" content="Jaydip Satani, Developer, React.js, Portfolio" />
        <meta property="og:title" content="Jaydip Satani - Developer Portfolio" />
        <meta property="og:description" content="Jaydip Satani's personal website showcasing development skills and projects using React.js." />
        <meta property="og:image" content="https://jaydipsatani.com/readme-img.png" />
        <meta property="og:url" content="https://jaydipsatani.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Jaydip Satani - Developer Portfolio" />
        <meta name="twitter:description" content="Jaydip Satani's personal website showcasing development skills and projects using React.js." />
        <meta name="twitter:image" content="https://jaydipsatani.com/readme-img.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Jaydip Satani</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
