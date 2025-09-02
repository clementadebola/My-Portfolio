import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import microlens from '../../Assets/Projects/microlens.png'
import youtube from '../../Assets/Projects/youtube.png';
import umzrm from '../../Assets/Projects/umzrm.png'
import butler from '../../Assets/Projects/butler.png'
import hrsite from '../../Assets/Projects/hrsite.png'
import instaSplit from '../../Assets/Projects/app-overview.png'

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
              imgPath={instaSplit}
              isBlog={false}
              title="Insta Split"
              description="Its an finance application built with react native expo where user tends to create group(bills) and add friends to split the bills with"
              ghLink="#"    
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microlens}
              isBlog={false}
              title="MicroLens"
              description="Microlens is a progressive web app powerd by Gemini AI built for everyone, from healthcare providers to everyday users, bringing accurate diagnosis and health education right to your fingertips."
              ghLink="https://github.com/jhmeel/microlens"
              demoLink="https://microlens-sf5r.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Clone"
              description="Its a simple youtube clone, that has the simple functunality of a youtube. its able to search, watch video on site."
              ghLink="https://github.com/clementadebola/Youtube-Clone.git"    
              demoLink="https://zgyoutubeclone.netlify.app/"
            />
          </Col>

          

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={butler}
              isBlog={false}
              title="Butler"
              description="Butler is a startup landing page i built,it offers home cleaning, laundry service, and food preparation."
              ghLink="#"
              demoLink="https://develop.d5rp29qz4fsyd.amplifyapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={umzrm}
              isBlog={false}
              title="UMZRM"
              description="UMZRM Website is a church website"
              ghLink="#"
              demoLink="https://umzrm.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hrsite}
              isBlog={false}
              title="HRSITE"
              description="Human resource website(HR)"
              ghLink="https://github.com/clementadebola/HRSite"
              demoLink="https://hrservicesite.netlify.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="#"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}


       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
