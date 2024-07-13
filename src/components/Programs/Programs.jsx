import React from "react";
import "./Programs.css";
import { Picture } from "../../assets/Picture";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={Picture.program_pic1} alt="" />
        <div className="caption">
          <img src={Picture.program_icon1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Picture.program_pic2} alt="" />
        <div className="caption">
          <img src={Picture.program_icon2} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Picture.program_pic3} alt="" />
        <div className="caption">
          <img src={Picture.program_icon3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
