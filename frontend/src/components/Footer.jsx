import React from "react";
import logo from "../../public/logo.jpg"; // Adjust the path as necessary
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer w-dvw h-[23vw] bottom-0 bg-[#1A191D] text-white flex items-center justify-center flex-col gap-4 px-27 py-5 relative z-20 overflow-hidden">
      <div className="footer1 size-full flex">
        <div className="footer1-1 w-1/3 p-4">
          <div className="w-[31%] p-[1.3vw] bg-white rounded-full overflow-hidden">
            <img src={logo} className="" />
          </div>
          <p className="text-[0.9vw] font-semibold tracking-wider text-gray-200 mt-7">
            We are a Delhi-based manufacturer of premium Thermal and Carbonless
            Paper Rolls, delivering quality and reliability across India and
            beyond.
          </p>
          <div>
            <ul className="flex items-center justify-start gap-4 mt-5">
              <li className=" size-10 border-gray-300 hover:cursor-pointer rounded-full hover:text-red-600 transform hover:scale-110 transition duration-300 ease-in-out flex items-center justify-center text-[1.9vw]">
                <AiFillInstagram className="social-icons"/>
              </li>
              <li className=" size-10 border-gray-300 hover:cursor-pointer rounded-full hover:text-red-600 transform hover:scale-110 transition duration-300 ease-in-out flex items-center justify-center text-[1.9vw]">
                <FaTwitter className="social-icons"/>
              </li>
              <li className=" size-10 border-gray-300 hover:cursor-pointer rounded-full hover:text-red-600 transform hover:scale-110 transition duration-75 ease-in-out flex items-center justify-center text-[1.9vw]">
                <FaFacebookF className="social-icons"/>
              </li>
              <li className=" size-10 border-gray-300 hover:cursor-pointer rounded-full hover:text-red-600 transform hover:scale-110 transition duration-300 ease-in-out flex items-center justify-center text-[1.9vw]">
                <FaYoutube className="social-icons"/>
              </li>
              <li className=" size-10 border-gray-300 hover:cursor-pointer rounded-full hover:text-red-600 transform hover:scale-110 transition duration-300 ease-in-out flex items-center justify-center text-[1.9vw]">
                <FaThreads className="social-icons"/>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer1-1 w-1/3 p-4 border-white flex items-center justify-between flex-col">
          <h1 className="heading text-[1.3vw] font-semibold mt-3 w-full text-left">Contact Company</h1>
          <ul className="flex flex-col gap-6 py-4 justify-between w-full company-contact">
            <li className="flex gap-4 text-[1vw]">
              <MdCall className="text-[1.3vw] social-icon text-[#767577]"/><p className="content-footer"> +91 9811163070 , +91 7838177347</p> 
            </li>
            <li className="flex gap-4 text-[1vw]">
              <MdMail className="text-[1.3vw] social-icon text-[#767577]"/><p className="content-footer">info@abhinavtradex.com, abhinavtradex2001@gmail.com</p>
            </li>
            <li className="flex gap-4 text-[1vw]">
              <FaLocationDot className="text-[1.3vw] social-icon text-[#767577]"/><p className="content-footer">5/2389/103, New Mela Ram market,
Chatta Shahji, Chawri Bazar, Delhi-11006</p>
            </li>
            <li className="flex gap-4 text-[1vw]">
              <BsGlobeAsiaAustralia className="text-[1.3vw] social-icon text-[#767577]"/><p className="content-footer"> www.abhinavtradex.com</p>
            </li>
          </ul>
        </div>
        <div className="footer1-1 w-1/3 p-4 border-white flex items-center flex-col relative z-50">
          <h1 className="text-[1.3vw] font-semibold mt-3 w-full text-left heading ">Customer Care</h1>
          <h2 className="mt-12 font-semibold w-full text-left">Feedback</h2>
          <input type="text" className="w-full h-10 bg-gray-300 focus:outline-none border-none mt-3 placeholder:text-gray-500 px-3 text-black" placeholder="Glad to listen your thoughts..."/>
          <p className="text-[0.9vw] font-semibold tracking-wider text-gray-200 mt-7">If any queries feel free to contact us ? Contact </p>
        </div>
      </div>
      <MdKeyboardDoubleArrowLeft className="arrow-footer absolute top-[-75%] right-[-20%] text-white text-[70vw] opacity-10 z-10"/>
    </div>
  );
};

export default Footer;
