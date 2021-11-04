import { React, useEffect } from 'react'
import './AboutMe.css'
import photo from "../../images/Heman.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, disable: "mobile", once: "true" });
  }, [])
  return (
    <div data-aos="fade" className="wrapper">
      <div class="aboutme-container">
        <div data-aos="fade-right" class="about-avatar">
          <img src={photo} alt="aboutMe" />
        </div>
        <div data-aos="flip-down" class="about-text go-to">
          <h3 class="dark-color">About Me</h3>
          <h6 class="theme-color lead">A Full Stack Web-Developer based in Germany</h6>
          <p> My programming journey began 3 years ago when I learned how to program and execute different alarm systems.To go further, I decided to dive into web development. The passion and motivation, I'm attaining for this industry, are allowing me to enjoy every minute of it and driving me to learn more every day. I'm looking forward to joining a new team of motivated individuals, to demonstrate my gained skills and abilities.</p>
        </div>
      </div>
    </div>

  )
}

export default AboutMe
