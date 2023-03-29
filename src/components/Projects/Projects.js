import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://raw.githubusercontent.com/abinashrasonowal/portfolio-project/main/images/readme.png"}
              title="Portfolio-project"
              description="For my portfolio project, I built a dynamic and responsive website using ReactJS. The goal of this project was to showcase my skills and experience as a developer and provide an easy-to-use platform for potential employers or clients to learn more about me.Additionally, the website is hosted on GitHub Pages, providing a convenient and reliable platform for hosting and sharing my work"
              ghLink="https://github.com/abinashrasonowal/portfolio-project"
              demoLink="https://abinashrasonowal.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://raw.githubusercontent.com/abinashrasonowal/online_ide/main/public/ui/images/Screenshot%20(42).png'}
              title="online_ide"
              description="For my personal project, I developed an online integrated development environment (IDE) cum compiler that supports a dark theme and syntax highlighting for multiple programming languages. The goal of this project was to provide a seamless development experience for programmers, allowing them to write and run code directly from their browser without the need to install any additional software."
              ghLink="https://github.com/abinashrasonowal/online_ide"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
