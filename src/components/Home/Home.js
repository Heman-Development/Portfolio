import { React, useEffect } from 'react'
import Typed from "react-typed";
import Particles from 'react-particles-js';
import Aos from "aos";
import "aos/dist/aos.css";
import './Home.css'
import CVen from './Heydar Molaei Forouhar (En) .pdf'
import CVde from './Heydar Molaei Forouhar (De).pdf'
import Photo from '../../images/Heman.jpg'





const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile", once: "true" });
  }, [])
  return (
    <>
   <Particles
        params={{ 
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 550
              }
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 6,
                color: '#f9ab00'
              }
            }
          }
        }}
        />
    <div data-aos="fade" className="home-wrapper">
      <div className="main-info">
        <h1>Full Stack Web-Developer</h1>
        <div className="image"><img src={Photo} alt="hemanphoto"/></div>
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
   </>
  )
}

export default Home
