import React from "react";
import "./Campus.css";
import { Picture } from "../../assets/Picture";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={Picture.gallery1} alt="" />
        <img src={Picture.gallery2} alt="" />
        <img src={Picture.gallery3} alt="" />
        <img src={Picture.gallery4} alt="" />
      </div>
      <button className="btn dark-btn">See more here <img src={Picture.white_arrow} alt="" /></button>
    </div>
  );
};

export default Campus;
