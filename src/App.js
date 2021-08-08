import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/ContactMe/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Portfolio/" exact component={Home} />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/aboutme" exact component={AboutMe} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
