import React from "react";
import HeroVideo from "../assets/herovideo.mp4";
import HeroImg from '../assets/heroimg.png'

function Hero() {
  return (
    <div
      className="lg:py-0 w-[90%] h-[50vh] lg:h-auto mx-auto rounded-3xl shadow-xl my-10 overflow-hidden font-Poppins"
      id="home"
      data-aos="fade-up"
    >
      <div className="relative">
        <video
          className="object-cover w-full h-[80vh]"
          src={HeroVideo}
          autoPlay
          muted
          loop
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute w-full h-full top-0 right-0 ">
          <div className="flex flex-col lg:flex-row relative">
            <div className="heroImg bg-white justify-center items-center absolute right-0 flex h-[60vh] lg:h-[80vh] w-1/2">
              <img className="lg:w-[400px] lg:h-[400px] lg:ml-28 pl-10" src={HeroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
