import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";


function Contact() {


  return (
    <div id='contact' className="w-[90%] mx-auto my-20 lg:my-40 rounded-3xl font-Poppins overflow-hidden" data-aos="fade-down" data-aos-duration="2000">
      <h2 className="text-2xl lg:text-4xl text-main_dark text-center font-semibold mb-10">Contact Us</h2>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 my-8 lg:my-16 rounded-3xl">
          <h1 className='text-lg font-semibold mb-10 ml-7'>Quality Engineering and Contracting</h1>
          <h1 className='text-lg font-semibold flex'>
            <FaLocationDot className='mr-4 mt-4'/> 
            Hind Traders, Isopur, Rai Chowk, Near Puja Ply Factory, Phulwari Sharif, Patna, Bihar 801505 
          </h1>
          <h1 className='text-lg font-semibold flex mt-6'>
            <IoMdCall className='mr-2 mt-1'/> 
            +91-8507740935 
          </h1>
        </div>
        <div className='lg:w-2/3'>
        <iframe className='w-[100%] h-[100%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14396.125184227261!2d85.05280085413764!3d25.57062553955599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a9d6b34a5f73%3A0xa30cb2e803428864!2sQuality%20Engineering%20%26%20Contracting!5e0!3m2!1sen!2sin!4v1721241920969!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
