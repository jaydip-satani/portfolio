import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import careerPaths from "../../Assets/Projects/carer_paths.png";
import videcareerPathsVideo from "../../Assets/videos/career_paths.mp4";
import bms from "../../Assets/Projects/bms.jpg";
import plusCare from "../../Assets/Projects/plus_care.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Helmet>
        <title>Jaydip Satani - Projects</title>
        <meta name="description" content="A collection of projects created by Jaydip Satani, including web development, career guidance platforms, and more." />
        <meta name="keywords" content="Jaydip Satani, Projects, Web Development, Career Paths, React.js" />
        <meta property="og:title" content="Jaydip Satani - Projects" />
        <meta property="og:description" content="A collection of projects created by Jaydip Satani, including web development, career guidance platforms, and more." />
        <meta property="og:image" content="https://jaydipsatani.com/readme-img.png" />
        <meta property="og:url" content="https://jaydipsatani.com/projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Jaydip Satani - Projects" />
        <meta name="twitter:description" content="A collection of projects created by Jaydip Satani, including web development, career guidance platforms, and more." />
        <meta name="twitter:image" content="https://jaydipsatani.com/readme-img.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={careerPaths}
              isBlog={false}
              title="Career-Paths"
              description="Developed a user-friendly guidance platform to help students choose their educational paths after the 10th and 12th grades. The application includes personalized quizzes, video insights, and tailored recommendations for career fields and colleges, guiding students in making well-informed decisions."
              ghLink="https://github.com/jaydip-satani/career_paths"
              demoLink={videcareerPathsVideo}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plusCare}
              isBlog={false}
              title="Plus-Care"
              description="The Smart Appointment System is a web-based platform designed to streamline the process of booking doctor appointments. It allows patients to register, search for doctors, and manage their appointments, while doctors can view their appointments and add prescriptions. Administrators have control over managing doctors and overseeing appointments, providing a centralized solution for efficient healthcare management."
              ghLink="https://github.com/jaydip-satani/plus_care"
              demoLink="https://pluscare.jaydipsatani.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bms}
              isBlog={false}
              title="Bank-Management-System"
              description="The Bank Management System is a web application that enables administrators and employees to manage bank accounts, loan applications, and transactions effectively. It provides a secure and user-friendly interface for creating, updating, and closing accounts while ensuring authorized access to sensitive functionalities."
              ghLink="https://github.com/jaydip-satani/bms"
            // demoLink="https://pluscare.jaydipsatani.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
