import React from "react";
import "./About.css";
import { Picture } from "../../assets/Picture";

const About = ({setShowVideo}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={Picture.about_pic} alt="" className="about-img" />
        <img src={Picture.play_icon} alt="" className="play-icon" onClick={()=> {setShowVideo(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower student with the knowledge, skills and experiences
          needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hand-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communitites.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, our
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
