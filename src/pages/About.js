import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";
import Kenneth_ProfilePic from '../assets/Kenneth_ProfilePic.jpg'

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={Kenneth_ProfilePic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kenneth Ramirez Castro</div>
            <div className="brief_description">
            Overachieving computer science student with a strong belief in self-motivated learning. 
            Adept at quickly learning and applying new skills. Strong teamwork and training skills. 
            Fluent in Spanish and English. Proficient with Python, robotics, Front-End Web Development, 
            Microsoft Office, and photography. Seeking CS careers in Frontend Web and Software Development, 
            and Robotics.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
