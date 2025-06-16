import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SHAIK IMRAN </span>
            from <span className="purple"> HYDERABAD, India.</span>
            <br />
            I am currently pursuning my B.Tech in Computer Science and
            Engineering.
            <br />
    
            I am a passionate developer who loves to explore new technologies and
            develop innovative solutions. I have a keen interest in web
            development, and I enjoy working with React, Node.js, and other
            modern web technologies.
            <br />
            I am always eager to learn and grow in my field, and I believe that
            collaboration and sharing knowledge are key to success in the tech
            industry.
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SHAIK IMRAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
