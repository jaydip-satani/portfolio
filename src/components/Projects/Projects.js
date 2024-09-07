import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import careerPaths from "../../Assets/Projects/carer_paths.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import videcareerPathsVideo from "../../Assets/videos/career_paths.mp4"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked .
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
