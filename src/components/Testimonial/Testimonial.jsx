import React, { useRef } from "react";
import "./Testimonial.css";
import { Picture } from "../../assets/Picture";

const Testimonial = () => {
  const silder = useRef();
  let Tx = 0;
  const slideFoward = () => {
    if (Tx > -50) {
      Tx -= 25;
    }
    silder.current.style.transform = `translateX(${Tx}%)`;
  };
  const slideBackward = () => {
    if (Tx < 0) {
      Tx += 25;
    }
    silder.current.style.transform = `translateX(${Tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={Picture.next_icon}
        alt=""
        className="next-btn"
        onClick={slideFoward}
      />
      <img
        src={Picture.back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={silder}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Picture.user_pic1} alt="" />
                <div>
                  <h3>Emma Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Picture.user_pic2} alt="" />
                <div>
                  <h3>Williams Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Picture.user_pic3} alt="" />
                <div>
                  <h3>Sadra Hennson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Picture.NaPu} alt="" />
                <div>
                  <h3>NaPu</h3>
                  <span>Edusity, VietNam</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
