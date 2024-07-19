import React from 'react'
import Material from '../assets/material.png'

function Services() {
  return (
    <div id='services'
      className="w-[90%] mx-auto my-20 rounded-3xl font-Poppins overflow-hidden "
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <h2 className="text-2xl lg:text-4xl text-main_dark text-center font-semibold">
        Our Services
      </h2>

      <div className="flex flex-col lg:flex-row">
        <div
          className="lg:w-1/2 lg:my-16"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <img className="px-10 py-10" src={'https://as1.ftcdn.net/v2/jpg/08/18/57/32/1000_F_818573202_KOKFuQ8wPeIWWCiE7a6X73UqkKj3HGaO.jpg'} alt="" />
        </div>
        <div
          className="lg:w-1/2 lg:my-16"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <h2 className="aboutHeading text-left px-10 underline font-extrabold lg:text-2xl mb-8 font-Poppins">
          Crafting Comfortable and Stylish Homes for Modern Living
          </h2>
          <p className="aboutText text-sm lg:text-lg mb-8 px-10">
          At Quality Engineering and Contracting, we understand that a home is more than just a place to live; it is a sanctuary where comfort, style, and functionality converge to create the perfect living environment. Our dedication to building homes that cater to modern living needs is reflected in every residential project we undertake. From single-family homes to multi-unit complexes, our goal is to design and construct spaces that not only meet but exceed our clients' expectations. Our approach to residential construction is grounded in a deep understanding of contemporary living requirements.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        
        <div
          className="lg:w-1/2 lg:my-16"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <h2 className="aboutHeading text-left px-10 underline font-extrabold lg:text-2xl lg:mb-8 font-Poppins">
          Building State-of-the-Art Commercial Spaces for Growth and Innovation
          </h2>
          <p className="aboutText text-sm lg:text-lg px-10">
          We begin every commercial project with a deep dive into understanding the specific needs and goals of our clients. Every business has its unique operational requirements, brand identity, and vision for the future. By collaborating closely with our clients from the outset, we ensure that the spaces we design and build are perfectly aligned with their strategic objectives.For office buildings, this might mean creating flexible workspaces that can adapt to changing team sizes and work styles, integrating technology seamlessly to support remote work and digital collaboration, and ensuring that the environment promotes employee well-being and productivity.
          </p>
        </div>

        <div
          className="lg:w-1/2 lg:my-16"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img className="px-10 py-10" src={'https://img.freepik.com/premium-photo/construction-crew-new-building-wide-angle_296091-5912.jpg?w=1060'} alt="" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">

      <div
          className="lg:w-1/2 lg:my-16 rounded-3xl"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <img className="px-10 lg:py-10" src={Material} alt="" />
        </div>
        
        <div
          className="lg:w-1/2 my-8 lg:my-16"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h2 className="aboutHeading text-left px-10 underline font-extrabold lg:text-2xl lg:mb-8 font-Poppins">
          Providing the Best Construction Materials
          </h2>
          <p className="aboutText text-sm lg:text-lg px-10">
          At Quality Engineering and Contracting, we believe that the foundation of any successful project lies in the quality of its materials. Our commitment to excellence extends beyond design and craftsmanship to include the careful selection of the best construction materials available. By using superior materials, we ensure the durability, safety, and aesthetic appeal of our projects, delivering lasting value to our clients. Our dedication to providing top-quality construction materials is unwavering. We understand that the longevity and performance of any structure depend heavily on the materials used in its construction. Therefore, we source our materials from trusted suppliers who meet our stringent quality standards.
          </p>
        </div>

        
      </div>
      </div>
  )
}

export default Services