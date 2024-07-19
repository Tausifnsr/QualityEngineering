import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';

function Navbar() {
    const [dropdown, setdropdown] = useState(false);
  
    const showdropdown = () => {
      setdropdown(!dropdown);
    };
  
    return (
      <nav className="w-full font-Poppins h-20 flex flex-col justify-center items-center sticky top-0 z-50 bg-white lg:shadow-2xl">
        <div className="w-full">
          <div className="lg:w-4/5 w-11/12 mx-auto h-full flex justify-between items-center">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <img src={Logo} alt="logo" className="h-[50px] w-[80px]" />
                {/* <h2 className="text-main_dark font-bold text-lg">QEngg</h2> */}
              </div>
            </div>
              <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                >
                  About Us
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                >
                  Our Services
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                >
                  Projects
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                >
                  Contact
                </Link>
              </ul>
              {dropdown ? (
                <div
                  onClick={showdropdown}
                  className="lg:hidden text-[22px] cursor-pointer text-black"
                >
                  <MdClose />
                </div>
              ) : (
                <div
                  onClick={showdropdown}
                  className="lg:hidden text-[22px] cursor-pointer text-black"
                >
                  <HiMenuAlt3 />
                </div>
              )}
            </div>
            {dropdown && (
              <div className="lg:hidden w-full fixed top-[4.5rem] bg-white trasnsition-all">
                <div className="w-full flex flex-col items-baseline gap-4 p-4 pt-0">
                  <ul className="flex flex-col justify-center w-[100%]">
                    <Link
                      to="home"
                      smooth={true}
                      duration={500}
                      onClick={showdropdown}
                      className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                    >
                      Home
                    </Link>
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      onClick={showdropdown}
                      className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                    >
                      About Us
                    </Link>
                    <Link
                      to="services"
                      smooth={true}
                      duration={500}
                      onClick={showdropdown}
                      className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                    >
                      Our Services
                    </Link>
                    <Link
                      to="projects"
                      smooth={true}
                      duration={500}
                      onClick={showdropdown}
                      className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                    >
                      Projects
                    </Link>
                    <Link
                      to="contact"
                      smooth={true}
                      duration={500}
                      onClick={showdropdown}
                      className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                    >
                      Contact
                    </Link>
                  </ul>
                </div>
              </div>
            )}
          </div>
      </nav>
    );
  }

export default Navbar;
