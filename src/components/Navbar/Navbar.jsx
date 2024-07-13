import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Picture } from "../../assets/Picture";
import { Link, ScrollLink } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [MobileMenu, setMobileMenu] = useState(false);

  const ToggleMenu = ()=> {
    MobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={Picture.logo} alt="" className="logo" />
      <ul className={MobileMenu? "": "hide-moblie-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={600}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-250} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-250} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
            <Link className="btn" to="contact" smooth={true} offset={-250} duration={500}>
              Contact Us
            </Link>
        </li>
      </ul>
      <img src={Picture.menu_icon} alt="" className="menu-icon" onClick={ToggleMenu}/>
    </nav>
  );
};

export default Navbar;
