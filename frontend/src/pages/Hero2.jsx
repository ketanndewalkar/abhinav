import React from "react";

const Hero2 = () => {
  return (
    <div className="w-dvw h-dvh z-20 relative px-10 py-20 hero2" id="hero2">
      <div className="size-full flex hero21">
        <div className="w-2/3 h-full px-10 relative hero211">
          <h1 className="font-bold text-[1.8vw] mt-10 text-red-600 hero2111 whitespace-nowrap">
            Welcome to Abhinav Tradex Pvt. Ltd.
          </h1>
          <div className="w-full h-[2px] bg-gradient-to-r from-black to-white "></div>
          <p className="mt-9 tracking-widest hero2112">
            We are a leading Delhi-based manufacturer of Thermal Paper Rolls and
            Carbonless Paper Rolls. In addition to our in-house manufacturing,
            we source a wide range of papers from well-established global
            vendors. These vendors follow strict quality control policies and
            employ innovative methods to deliver world-class products. Our
            dedicated team ensures we stay aligned with the fast-changing market
            trends and the latest industry demands.
          </p>
          <p className="mt-10 tracking-widest hero2113">
            The products have been always been in spotlight in the market, owing
            to its optimum quality. The quality is been maintained throughout
            the business operation with the support of quality control lab. We
            follow a quality management system leading to the delivery of paper
            and boards as per international standards. Moreover, we pack our
            consignments using quality packaging material like corrugated boxes
            and durable plastic sheets.
          </p>
          <div className="h-fit mt-5 hero2114">
            <h1 className=" font-bold text-[2vw] hero2111 text-red-600">Printing Grade</h1>
          <div className="w-full h-[2px] bg-gradient-to-r from-black to-white"></div>

            <div className=" mt-5 flex gap-10 pl-4 hero2115">
              <span className="flex flex-col items-center gap-[1vw]"><img src="/check.png" className="tick h-[3vw]"/><p className="font-bold w-full text-center">Thermal Paper Roll</p></span>
              <span className="flex flex-col items-center gap-[1vw]"><img src="/check.png" className="tick h-[3vw]"/><p className="font-bold w-full text-center">Carbon Less Paper Roll</p></span>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[80vh] rounded-xl overflow-hidden shadow-lg hero212">
          <img src="/paper.png" className="object-cover size-full object-center"/>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
