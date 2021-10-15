import { React, useEffect } from 'react'
import './ContactMe.css'
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, disable: "mobile", once: "true" });
  }, [])
  return (
    <div  className="wrapper">

      <div data-aos="fade-down"class="form-box">
        <h1>Contact me</h1>

        <form action="https://formsubmit.co/9f3805e4e834e87ae137ec9c071eab46" method="POST">
          <div class="form-group">
            <label for="name">Name</label>
            <input class="form-control" id="name" type="text" name="Name" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input class="form-control" id="email" type="email" name="Email" />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" name="Message"></textarea>
          </div>
          <input class="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    

    </div>



  )
}

export default Contact
