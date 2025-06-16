import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={suicide}
              isBlog={false}
              title="Object_Classification_Using_CNN-Based_Fusion_of_Vision_and_LIDAR"
              description="This paper presents an object classification method for vision and light detection and ranging (LIDAR) fusion of autonomous vehicles in the environment.  "
              githubLink="https://github.com/shaikimran03/Object_Classification_Using_CNN-Based_Fusion_of_Vision_and_LIDAR"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Retail-Blog-with-AI"
              description="blogging website made with reactjs, express and mongdb. create blog content with AI.
Includes complete user management,ai and razorpay integrations."
              ghLink="https://github.com/shaikimran03/Retail-Blog-with-AI"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TiktokClone"
              description="Welcome to TiktokClone
Make a web app Like TIKTOK"
              ghLink="https://github.com/shaikimran03/TiktokClone"
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Amazon Clone"
              description="This is a clone of Amazon using React.js, Node.js, Express.js, and MongoDB. It includes features like user authentication, product listing, and a shopping cart. The project demonstrates my skills in full-stack development and my ability to create scalable web applications."
              githubLink="https://github.com/shaikimran03/Amazon-clone-using-react"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Youtube Clone"
              description="This is a clone of Youtube using React.js, Node.js, Express.js, and MongoDB. It includes features like user authentication, video uploading, and a video player. The project demonstrates my skills in full-stack development and my ability to create scalable web applications."
              ghLink="https://github.com/shaikimran03/project_youtube_clone-main"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
