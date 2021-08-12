import React from "react";
import "../../App.css";
import { NavLink } from 'react-router-dom';
import logo from "../../images/Heman_Logo_2.jpg";


// React FontAwesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">

        <a className="navbar-brand" href="/aboutme">  <img className="logo" src={logo} alt="logo..." /></a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item active">
              <NavLink className="nav-link" activeClassName='Active-page' to='/home'>
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" activeClassName='Active-page' to='/aboutme'>
                ABOUT ME
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" activeClassName='Active-page' to='/projects'>
                projects
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link" activeClassName='Active-page' to='/contact'>
                contact
              </NavLink>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
