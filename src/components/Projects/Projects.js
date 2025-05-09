import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import automation from "../../Assets/Projects/automation.png";
import mazeBank from "../../Assets/Projects/maze bank.jpeg"
import portfolio from "../../Assets/Projects/portfolio.png"
import quiz from "../../Assets/Projects/quiz.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={automation}
              isBlog={false}
              title="AUTOMATION"
              description="It is a Laravel-based web application designed to streamline and digitize manual academic and administrative processes in an educational institution. It is developed with Laravel, React JS, MySQL, Filament v3, Tailwind CSS. It has features like token-based authentication, roll-based authorization, file sharing, document generation."
              tags = {['Laravel','React', 'MySQL', 'RestAPI']}
              ghLink="https://github.com/sampad-singha/Department_Automation_System"
              demoLink="https://artisanforces.proactive-coder.xyz/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mazeBank}
              isBlog={false}
              title="Maze Bank"
              description="A system that automates banking tasks such as transfering, withdrawals, account information, apply for loan etc. It is developed using Laravel, MySQL, Filament, and Laravel Blade."
              tags = {['Laravel', 'MySQL']}
              ghLink="https://github.com/sampad-singha/bank-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="A website to showcase projects, researches, and skills. Developed using React JS."
              tags = {['React']}
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://shahriar-shoishob.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quizzical"
              description="A React application that generates trivia quiz from a public API. User can play a round and check his score."
              tags = {['React']}
              ghLink="https://github.com/sampad-singha/Quize_Master"
              demoLink="https://quizzical-q.netlify.app/"
            />
          </Col>

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={suicide}*/}
          {/*    isBlog={false}*/}
          {/*    title="Ai For Social Good"*/}
          {/*    // tags = {['Laravel','React', 'MySQL']}*/}
          {/*    description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."*/}
          {/*    ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"*/}
          {/*    // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here*/}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={emotion}*/}
          {/*    isBlog={false}*/}
          {/*    title="Face Recognition and Emotion Detection"*/}
          {/*    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.*/}
          {/*    Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."*/}
          {/*    // tags = {['Laravel','React', 'MySQL']}*/}
          {/*    ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"*/}
          {/*    // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here */}
          {/*  />*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
