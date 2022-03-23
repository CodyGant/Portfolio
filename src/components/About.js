import React from "react";
import {Container} from "react-bootstrap";
function About() {
  return (
    <div className="aboutMe">
      <div className = 'aboutText'> 
        <Container>
            <h2>Hello!</h2>
            <h3>My Name is Cody Gant.</h3>
            <span>I'm a Front End Developer and a Software Enginering Student</span>
        </Container>
      </div>
    </div>
  );
}

export default About;
