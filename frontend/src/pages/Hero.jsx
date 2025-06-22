import React, { useRef } from "react";
import globe from "../../public/globe.png"; // Adjust path if needed
import tiolet from "../../public/toilet.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const heading1 = useRef(null);
  const heading2 = useRef(null);
  const sideimageRef = useRef(null);
  const slideRef = useRef(null);
  useGSAP(() => {
    if (!heading1.current) return;
    if (!heading1.current) return;
    gsap.to;
    gsap.from(heading1.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "linear",
    });
    gsap.from(heading2.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "linear",
    });
    gsap.from(sideimageRef.current, {
      x: "100%",
      duration: 0.6,
      ease: "linear",
      opacity: 0,
    });
    gsap.fromTo(
      slideRef.current.querySelectorAll("li"),
      { scaleX: 1 },
      {
        scaleX: 1.6,
        transformOrigin: "right",
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        stagger: 0.2,
      }
    );
    
  }, []);

  return (
    <div className="hero w-dvw h-fit pb-[5vw] bg-black relative flex flex-col items-center justify-center overflow-hidden">
      <img
        src={globe}
        className="w-screen h-screen opacity-30 absolute top-0 left-0 object-center object-cover z-10 bg-black"
        alt="globe"
      />

      <div
        className="side-image absolute top-[6vw] w-[30%] h-[calc(100dvh-13vh)] right-0 bg-gray-100 flex items-center justify-center opacity-100"
        ref={sideimageRef}
      >
        <img src={tiolet} className="object-center object-cover h-full" alt="tiolet" />
      </div>

      <div className="text-white z-30 relative pt-[13vh] flex items-center w-dvw h-dvh">
        <div className="h-dvh w-dvw pr-9 pl-4 py-[6vw] flex items-center hero-1-main gap-9">
          <div className="w-[4vw]">
            <ul
              className="flex flex-col gap-[3vw] items-end justify-center h-full"
              ref={slideRef}
            >
              <li className="text-[1.2vw] font-semibold bg-gray-600 hover:bg-gray-400 size-5 hover:w-8 hover:cursor-pointer transition-all duration-700 rounded-sm"></li>
              <li className="text-[1.2vw] font-semibold bg-gray-600 hover:bg-gray-400 size-5 hover:w-8 hover:cursor-pointer transition-all duration-700 rounded-sm"></li>
              <li className="text-[1.2vw] font-semibold bg-gray-600 hover:bg-gray-400 size-5 hover:w-8 hover:cursor-pointer transition-all duration-700 rounded-sm"></li>
            </ul>
          </div>

          <div
            className="hero-2-main h-full flex flex-col justify-center text-gray-300 w-[70%] border-white"
            ref={heading1}
          >
            <h1 className="text-gray-400 text-[1.1vw] font-semibold space-x-1">
              {Array.from("WELCOME TO ABHINAV TRADEX Pvt. Ltd.").map(
                (char, index) => (
                  <b key={index} className="inline-block">
                    {char}
                  </b>
                )
              )}
            </h1>

            <h1 className="text-[4vw] font-bold mt-8 mr-5 leading-18" ref={heading2}>
              High-Quality and Cost-Effective Paper for Commercial Use.
            </h1>

            <p className="w-[80%] mt-10 text-gray-400">
              We are a Delhi-based manufacturer of Thermal and Carbonless Paper
              Rolls, sourcing high-quality paper globally. Backed by strict
              quality control and innovative methods, our products meet
              international standards. With expert teams and modern packaging,
              we ensure reliable and market-ready deliveries.
            </p>

            
            <button className="rounded-md px-6 py-2 w-fit bg-red-700 font-bold text-[1.1vw] mt-13 hover:cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out" onClick={function () {
  const heroSection = document.getElementById("hero2");
  if (heroSection) {
    heroSection.scrollIntoView({ behavior: "smooth" });
  }
}
}>
              Learn More
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
