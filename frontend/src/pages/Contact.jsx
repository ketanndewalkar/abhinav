import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-dvw h-dvh pt-[6vw] relative page2 contactpage">
        <div className="size-full relative contactpage1">
          <div
            className="w-full absolute top-0 left-0 z-20 flex justify-end  opacity-90 contactpage11"
            style={{ height: "calc(100vh - 6vw)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28010.274381683284!2d77.231725!3d28.651204999999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd19b388a2c5%3A0x3d5114792d1e7f79!2sAbhinav%20Tradex%20Pvt%20Ltd..!5e0!3m2!1sen!2sus!4v1750413548805!5m2!1sen!2sus"
              width="600"
              height="450"
              className="h-full w-full object-cover object-center contactpage111"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-1/2 relative flex p-[5vw] h-full text-white contactpage12">
            <div className=" bg-red-700 relative z-21 size-full flex justify-start px-[1vw] contactpage121 py-[2vw] flex-col items-center rounded-2xl overflow-hidden">
              <div className="z-40 size-full flex flex-col justify-center items-center contactpage1211">
                <h1 className="w-full text-center text-[1.5vw] tracking-widest mt-[0.5vw] flex contactpage12111 items-center justify-center">
                  <p className="w-fit border-b-2">Contact</p>
                </h1>
                <h1 className="w-full text-center text-[2vw] font-bold tracking-widest mt-[1.4vw] contactpage12112">
                  Abhinav Tradex Pvt Ltd.
                </h1>
                <p className="mt-[2rem] font-semibold tracking-widest text-center px-10 contactpage12113">
                  5/2389/103, New Mela Ram market, Chatta Shahji, Chawri Bazar,
                  Delhi-11006
                </p>
                <p className="mt-[1.5rem] font-semibold contactpage12114"><b>Email</b> : abhinavtradex2001@gmail.com</p>
                <p className="mt-[1.5rem] font-semibold contactpage12114"><b>Phone No.</b> : +91- 98-1116-3070, 7838177347</p>
                <p className="mt-[1.5rem] font-semibold contactpage12114"><b>Venue</b> : Head Office</p>
              </div>
              <img
                src="textures.jpg"
                className="size-full absolute top-0 left-0 z-20 opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
