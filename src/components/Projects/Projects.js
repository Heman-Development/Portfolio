import { React, useEffect } from 'react'
import './Projects.css'
import Aos from "aos";
import "aos/dist/aos.css";
import ecommerce from '../../images/ecommerce.jpg';
import pokemon from '../../images/pokemon-game.jpg';
import portfolio from '../../images/portfolioView.png';
import hdimageboard from '../../images/hd-imageboard.jpg';
import freebie from '../../images/Freebie.jpg';



const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, disable: "mobile", once: "true" });
    setTimeout(function() { Aos.refresh(); }, 250);
    }, [])

  return (
    <div data-aos="fade" className="wrapper">
      <div class="card-group-main">
      <div data-aos="zoom-in-down"  data-aos-delay="100" class="card">
          <img src={freebie} class="card-img-top" alt="freebie" />
          <div class="card-body">
            <h5 class="card-title">Freebie - (Full Stack)</h5>
            <span>SASS | REACT JS | REDUX | EXPRESS | NODE JS | MONGODB</span>
            <p class="card-text">Group project of 4 - an app where users can offer items they no longer need to others (For Free). Included features: Sign up, Login, Reset password, Email confirmation, Edit profile, Post, Update and Delete ads, Contact users, Search ads, Filter by categories and more.</p>
            <div className="btn">
              <a href="https://freebieglobal.herokuapp.com" class="btn btn-primary" target="_blank" rel="noreferrer">DEMO</a>
              <a href="https://github.com/Heman-Development/Freebie" class="btn btn-primary" target="_blank" rel="noreferrer">CODE</a>
            </div>
          </div>
        </div>
           <div data-aos="zoom-in-down" data-aos-delay="500" class="card">
          <img src={ecommerce} class="card-img-top" alt="e-commerce" />
          <div class="card-body">
            <h5 class="card-title">E-commerce shop - (without auth)</h5>
            <span>SASS | REACT JS | REDUX | API | NPM</span>
            <p class="card-text">Group project of 3 - a fashion and tech store with a variety of pages, where you can add/remove items from the shopping cart.</p>
            <div className="btn">
              <a href="https://heman-development.github.io/e-commerce" class="btn btn-primary" target="_blank" rel="noreferrer">DEMO</a>
              <a href="https://github.com/Heman-Development/e-commerce" class="btn btn-primary" target="_blank" rel="noreferrer">CODE</a>
            </div>
          </div>
        </div>
        <div data-aos-delay="500" class="card">
          <img src={portfolio} class="card-img-top" alt="portfolio" />
          <div class="card-body">
            <h5 class="card-title">Portfolio</h5>
            <span>CSS | REACT JS | NPM</span>
            <p class="card-text">My portfolio page displaying my group projects.</p>
            <div className="btn">
              <a href="https://heman-development.github.io/Portfolio" class="btn btn-primary" target="_blank" rel="noreferrer">DEMO</a>
              <a href="https://github.com/Heman-Development/Portfolio" class="btn btn-primary" target="_blank" rel="noreferrer">CODE</a>
            </div>

          </div>
        </div>
        {/* <div  data-aos-delay="500" class="card">
          <img src={pokemon} class="card-img-top" alt="pokemon" />
          <div class="card-body">
            <h5 class="card-title">Pokemon Game</h5>
            <span>HTML | CSS | VANILLA JS</span>
            <p class="card-text">Group project of 3 - a fun pokemon battle game where you attack opponents, buy stardust and hear some cool sound effects.</p>

            <div className="btn">
              <a href="https://heman-development.github.io/Pokemon-Game" class="btn btn-primary" target="_blank" rel="noreferrer">DEMO</a>
              <a href="https://github.com/Heman-Development/Pokemon-Game" class="btn btn-primary" target="_blank" rel="noreferrer">CODE</a>
            </div>

          </div>
        </div> */}
        <div  data-aos-delay="500" class="card">
          <img src={hdimageboard} class="card-img-top" alt="hdimageboard" />
          <div class="card-body">
            <h5 class="card-title">HD Image Board</h5>
            <span>SASS | REACT | JS | REDUX | EXPRESS JS | NODE </span>
            <p class="card-text">Single full-stack project (client & server) where you can sign up, create, edit, like and delete individual image cards.</p>

            <div className="btn">
              <a href="https://hd-imageboard.netlify.app" class="btn btn-primary" target="_blank" rel="noreferrer">DEMO</a>
              <a href="https://github.com/Heman-Development/HD-Image_Board" class="btn btn-primary" target="_blank" rel="noreferrer">CODE</a>
            </div>
            
          </div>
        </div>
      </div>
      </div>
  )
}

export default Projects
