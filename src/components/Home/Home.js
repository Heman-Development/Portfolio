import { React, useEffect } from 'react'
import Typed from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";
import './Home.css'
import CVen from './Heydar Molaei Forouhar (En) .pdf'
import CVde from './Heydar Molaei Forouhar (De).pdf'



const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile", once: "true" });
  }, [])
  return (
    <div data-aos="fade" className="home-wrapper">
      <div className="main-info">
        <h1>Full Stack Web-Developer</h1>
        <Typed
          className="typed-text"
          strings={["HELLO, my name is Heydar!", "I am a Full-Stack Web Developer", "Welcome to my Portfolio",]}
          typeSpeed={40}
          backSpeed={20}
          loop
        />
        <div className="cvBtn">
          <a class="btn " href={CVen} role="button" target="_blank" rel="noreferrer">Download CV in English</a>
          <a class="btn " href={CVde} role="button" target="_blank" rel="noreferrer" >Download CV in German</a>
        </div>

      </div>
    </div>
  )
}

export default Home
