import { React, useEffect } from 'react'
import './Projects.css'
import Aos from "aos";
import "aos/dist/aos.css";
import ecommerce from '../../images/ecommerce.jpg';
import pokemon from '../../images/pokemon-game.jpg';
import portfolio from '../../images/portfolioView.png';
import hdimageboard from '../../images/hd-imageboard.png';
import noteWall from '../../images/NoteWall.png';

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, disable: "mobile", once: "true" });
  }, [])
  return (
    <div className="wrapper">

      <div class="card-group">
      <div data-aos="fade-up" data-aos-delay="100" class="card">
          <img src={noteWall} class="card-img-top" alt="e-commerce" />
          <div class="card-body">
            <h5 class="card-title">Note Wall</h5>
            <span>HTML | CSS | Vanilla JavaScript </span>
            <p class="card-text">Sticky notes browser application with ability to store the notes created in the Local Storage. Built with HTML, CSS, Vanilla JavaScript..</p>
            <div className="btn">
              <a href="https://heman-development.github.io/NoteWall/" class="btn btn-primary" target="_blank" rel="noreferrer">DEMO</a>
              <a href="https://github.com/Heman-Development/NoteWall" class="btn btn-primary" target="_blank" rel="noreferrer">CODE</a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" class="card">
          <img src={ecommerce} class="card-img-top" alt="e-commerce" />
          <div class="card-body">
            <h5 class="card-title">E-commerce shop</h5>
            <span>SASS | REACT JS | REDUX | API | NPM</span>
            <p class="card-text">Group project of 3 - a fashion and tech store with a variety of pages, where you can add/remove items from the shopping cart.</p>
            <div className="btn">
              <a href="https://heman-development.github.io/e-commerce/" class="btn btn-primary" target="_blank" rel="noreferrer">DEMO</a>
              <a href="https://github.com/Heman-Development/e-commerce" class="btn btn-primary" target="_blank" rel="noreferrer">CODE</a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" class="card">
          <img src={portfolio} class="card-img-top" alt="portfolio" />
          <div class="card-body">
            <h5 class="card-title">Portfolio</h5>
            <span>CSS | REACT JS | NPM</span>
            <p class="card-text">My portfolio page displaying my group pro  jects.</p>
            <div className="btn">
              <a href="https://heman-development.github.io/Portfolio/" class="btn btn-primary" target="_blank" rel="noreferrer">DEMO</a>
              <a href="https://github.com/Heman-Development/Portfolio" class="btn btn-primary" target="_blank" rel="noreferrer">CODE</a>
            </div>

          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" class="card">
          <img src={pokemon} class="card-img-top" alt="pokemon" />
          <div class="card-body">
            <h5 class="card-title">Pokemon Game</h5>
            <span>HTML | CSS | VANILLA JS</span>
            <p class="card-text">Group project of 3 - a fun pokemon battle game where you attack opponents, buy stardust and hear some cool sound effects.</p>

            <div className="btn">
              <a href="https://heman-development.github.io/Pokemon-Game/" class="btn btn-primary" target="_blank" rel="noreferrer">DEMO</a>
              <a href="https://github.com/Heman-Development/Pokemon-Game" class="btn btn-primary" target="_blank" rel="noreferrer">CODE</a>
            </div>

          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" class="card">
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
