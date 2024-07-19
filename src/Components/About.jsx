import React from "react";
import About1 from "../assets/about.jpg";
import About2 from '../assets/about2.jpg'

function About() {
  return (
    <div id="about"
      className="w-[90%] mx-auto my-20 rounded-3xl font-Poppins overflow-hidden "
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <h2 className="text-2xl lg:text-4xl text-main_dark text-center font-semibold">
        About Us
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div
          className="lg:w-1/2 my-8 lg:my-16 rounded-3xl"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <img className="px-10 lg:py-10" src={About1} alt="" />
        </div>
        <div
          className="lg:w-1/2 lg:my-16"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <h2 className="aboutHeading text-center font-extrabold lg:text-2xl mb-4 lg:mb-8 font-Poppins">
            Who Are We?
          </h2>
          <p className="aboutText text-sm lg:text-lg px-10">
            Welcome to Quality Engineering and Contracting, your trusted
            partner in building excellence. Based in Patna, India, we specialize
            in delivering top-notch construction and engineering solutions
            tailored to meet the unique needs of our clients. With a commitment
            to quality, innovation, and customer satisfaction, we have
            established ourselves as a leading construction company in the
            region. Our team of skilled professionals brings years of expertise
            and a passion for excellence to every project we undertake. Whether
            it's residential, commercial, or infrastructure development, we
            ensure that every project is executed with the highest standards of
            quality and safety.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        
        <div
          className="lg:w-1/2 my-16"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <h2 className="aboutHeading text-center font-extrabold lg:text-2xl mb-4 lg:mb-8 font-Poppins">
            Our Mission
          </h2>
          <p className="aboutText text-sm lg:text-lg px-10">
          Our mission is to transform visions into reality through innovative engineering, meticulous planning, and impeccable execution. We strive to exceed client expectations by adhering to the highest standards of quality, safety, and sustainability in every project we undertake. At Quality Engineering and Construction, we believe that every project, regardless of its size or complexity, deserves the same level of dedication and attention to detail. Our goal is to build lasting relationships with our clients based on trust, transparency, and mutual respect.
          </p>
        </div>

        <div
          className="lg:w-1/2 my-8 lg:my-16"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img className="px-10" src={About2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
