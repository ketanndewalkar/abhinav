import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Hamburger from "hamburger-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const {token,user,logout} = useAuth();
  const [isOpen, setOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const contentRef = useRef(null);

  const ulRef = useRef(null);
  const menuContainerRef = useRef(null);
  const location = useLocation();

  const isProductPage =
    location.pathname === "/thermal" || location.pathname === "/carbon-free";
  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      if (isProductDropdownOpen) {
        el.style.maxHeight = el.scrollHeight + "px";
      } else {
        el.style.maxHeight = "0px";
      }
    }
  }, [isProductDropdownOpen]);
  useGSAP(() => {
    const items = ulRef.current.querySelectorAll("li, span");
    const tl = gsap.timeline();
    tl.from(items, {
      y: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.1,
    });
    return () => tl.kill();
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    if (isOpen) {
      tl.to(menuContainerRef.current, {
        x: "100%",
        duration: 0.01,
        opacity: 1,
        ease: "power1.out",
      });
    } else {
      tl.to(menuContainerRef.current, {
        x: 0,
        duration: 0.01,
        ease: "power1.in",
      });
    }
    return () => tl.kill();
  }, [isOpen]);

  return (
    <div className="w-dvw dk:h-[13vh] fixed bg-white z-50">
      <nav className="w-full h-full flex items-center justify-between px-5">
        <Link to="/" className="h-full ml-5 flex items-center nav1">
          <img src="logo1.png" className="h-[90%] w-fit" alt="Logo" />
        </Link>

        <div
          ref={menuContainerRef}
          className="menu-container h-full w-full mt-1 flex transition-transform duration-500 z-100"
        >
          <ul
            ref={ulRef}
            className="menu-container-ul w-full flex items-center justify-end px-10 gap-[4.5vw] font-semibold"
          >
            <li
              className="text-[1.2vw] hover:text-red-800 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-700" : "text-gray-900"
                }
              >
                Home
              </NavLink>
            </li>
            {/* pc product */}
            <div className="h-fit forpc"><li
              className={`text-[1.2vw] items-center gap-1 dk:h-full relative group cursor-pointer flex ${
                isProductPage ? "text-red-700" : "hover:text-red-700"
              }`}
            >
              <div className="flex items-center">
                <p>Our Product</p>
                <IoIosArrowForward className="ml-1 group-hover:rotate-90 transition-all duration-300 ease-in-out" />
              </div>

              <div
                className={`absolute top-full left-0 mt-1 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
      transition-all duration-300 ease-out origin-top bg-[#fcfcfc] border-b-4 border-red-700 
      text-nowrap p-[1vw] py-[0.7vw] flex flex-col text-[1vw] gap-[0.5vw] shadow-lg z-50`}
              >
                <NavLink
                  to="/thermal"
                  className={({ isActive }) =>
                    `font-normal w-full cursor-pointer ${
                      isActive ? "text-red-700" : "text-gray-700"
                    } hover:text-red-700`
                  }
                  onClick={() => setOpen(false)}
                >
                  Thermal Paper Roll
                </NavLink>
                <div className="w-full border-b border-gray-200" />
                <NavLink
                  to="/carbon-free"
                  className={({ isActive }) =>
                    `font-normal w-full cursor-pointer ${
                      isActive ? "text-red-700" : "text-gray-700"
                    } hover:text-red-700`
                  }
                  onClick={() => setOpen(false)}
                >
                  Carbon Free Paper Roll
                </NavLink>
              </div>
            </li>
            </div>
            
            
            <div className="w-full h-fit hidden formobile"><li
              className={`p-0 w-full list-none cursor-pointer text-[1.2vw] items-center gap-1 dk:h-full relative group flex ${
                isProductPage ? "text-red-700" : "hover:text-red-700"
              }`}
              onClick={() => setIsProductDropdownOpen((prev) => !prev)}
            >
              <div className="flex p-0 justify-between items-center w-full hover:text-red-700">
                <p className="">Our Products</p>
                <IoIosArrowForward
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isProductDropdownOpen ? "rotate-90" : ""
                  }`}
                />
              </div>
            </li>

            {/* andriod Animated Dropdown */}
            {isProductDropdownOpen?<div
              ref={contentRef}
              className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out flex w-full flex-col h-fit"
            >
              <div className="border-b-2 border-red-700 w-full flex flex-col gap-[2vw] py-[1vw] pl-[3vw] text-[3.5vw] mt-[2vw]">
                <NavLink
                  to="/thermal"
                  onClick={() => {setIsProductDropdownOpen(false);setOpen(false)}}
                  className={({ isActive }) =>
                    `font-normal w-full cursor-pointer ${
                      isActive ? "text-red-700" : "text-gray-700"
                    } hover:text-red-700`
                  }
                  
                >
                  Thermal Paper Roll
                </NavLink>
                <div className="w-full border-b border-gray-200" />
                <NavLink
                  to="/carbon-free"
                  onClick={() => {setIsProductDropdownOpen(false);setOpen(false)}}
                  className={({ isActive }) =>
                    `font-normal w-full cursor-pointer ${
                      isActive ? "text-red-700" : "text-gray-700"
                    } hover:text-red-700`
                  }
                >
                  Carbon Free Paper Roll
                </NavLink>
              </div>
            </div>:""}
            </div>

            <li
              className="text-[1.2vw] hover:text-red-700 cursor-pointer relative z-99"
              onClick={() => setOpen(false)}
            >
              <NavLink
                to="/book"
                className={({ isActive }) =>
                  isActive ? "text-red-700" : "text-gray-900"
                }
              >
                Book Order
              </NavLink>
            </li>

            <li
              className="text-[1.2vw] hover:text-red-700 cursor-pointer relative z-99"
              onClick={() => setOpen(false)}
            >
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-red-700" : "text-gray-900"
                }
              >
                Contact
              </NavLink>
            </li>

            {!(token&&user)?<NavLink to="/login" className="loginbtn">
              <span className="border px-[2vw] py-[0.7vw] bg-red-700 text-white rounded-sm flex items-center justify-center hover:cursor-pointer text-[1.2vw] nav-lg-bt hover:bg-red-800">
                Log In <FaArrowRightLong className="ml-4" />
              </span>
            </NavLink>:<><span className="border px-[2vw] py-[0.7vw] bg-red-700 text-white rounded-sm flex items-center justify-center hover:cursor-pointer text-[1.2vw] nav-lg-bt hover:bg-red-800">
                {user.username}
              </span><span className="border px-[2vw] py-[0.7vw] bg-red-700 text-white rounded-sm flex items-center justify-center hover:cursor-pointer text-[1.2vw] nav-lg-bt hover:bg-red-800" onClick={logout}>
                Log out 
              </span></>}
          </ul>
        </div>

        <div className="h-fit dk:hidden items-center justify-center navlast">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            className="dk:text-[1.9vw] hover:cursor-pointer"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
