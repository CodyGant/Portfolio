import React from "react";
import Head from "../components/head3d";
import Terminal from "../components/terminal";

class About extends React.Component {
  
  render() {
    return (
      <div className="screen">
      <section className="buttonGroup">
       
        <button value="Placebo Button">TECHNOLOGIES</button>
        <button value="Rockets">PROJECTS</button>
        <button value="Smoke Screen">RESUME</button>
        <button value="Booster Rockets">HOW TO CONTACT ME</button>
      </section>

      <section className="buttonGroup">
        
        <section className="imageDisplay">
          <div className="aspect">
            <Head />
          </div>
        </section>
        <p>Hello...</p>
        <p>
          My name is Cody Gant. I'm a Front End Developer and Full Time Student
          at Daytona State College Majoring in Software Enginering. My passion
          is in computers and their ability to form the world around us in a
          cyber framework.
          <hr />
          Sed rhoncus a leo congue sollicitudin. Fusce risus tortor, rutrum id
          egestas at, elementum in dui. Fusce bibendum purus eu turpis
          vestibulum, eget aliquet ante pellentesque. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Fusce egestas, mauris eu vehicula placerat, lacus mi
          hendrerit lacus, ac rhoncus arcu purus eget odio. Aliquam commodo
          mattis lorem vitae porttitor.
        </p>
      </section>

      <section className="buttonGroup">
       
        <div className="visual1">
          <Terminal />
        </div>

        <div className="visual2"></div>

        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
            amet est nisl. Mauris euismod vel quam eu tincidunt. Sed dapibus
            justo id dapibus tempor. Pellentesque a libero sed risus congue
            ultrices. Quisque at congue massa. Duis feugiat ligula non nisi
            semper tempus. Duis blandit lacus sed diam blandit, id faucibus nunc
            viverra. Morbi consequat consequat facilisis. Sed in felis vitae
            nibh venenatis finibus sed et dolor. Sed vulputate molestie est ac
            tristique. Vestibulum et aliquam velit, in convallis nisl. Vivamus
            pellentesque venenatis urna eget suscipit.
            <hr />
            Sed rhoncus a leo congue sollicitudin. Fusce risus tortor, rutrum id
            egestas at, elementum in dui. Fusce bibendum purus eu turpis
            vestibulum, eget aliquet ante pellentesque. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Fusce egestas, mauris eu vehicula placerat, lacus mi
            hendrerit lacus, ac rhoncus arcu purus eget odio. Aliquam commodo
            mattis lorem vitae porttitor.
          </p>
        </section>
      </section>
     
    </div>
    );
  }
}
export default About