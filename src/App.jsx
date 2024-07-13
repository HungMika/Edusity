import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Tittle from "./components/Tittle/Tittle";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {

    const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Tittle subTittle="Our PROGRAM" Tittle="What we Offer" />
        <Programs />
        <About setShowVideo={setShowVideo}/>
        <Tittle subTittle="Gallery" Tittle="Campus Photos" />
        <Campus />
        <Tittle subTittle="TESTIMONIALS" Tittle="What Student says" />
        <Testimonial />
        <Tittle subTittle="Contact Us" Tittle="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer showVideo = {showVideo} setShowVideo = {setShowVideo}/>
    </div>
  );
};

export default App;
