import React, { useContext } from "react";
import { ImCross } from "react-icons/im";

import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useAuth } from "../context/AuthContext";

const Pop = () => {
  const { status, setpopshow } = useAuth();
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 z-1200 bg-[#59595974] flex items-center justify-center">
        <div className="w-[50vw] h-[50vh] bg-white flex items-center justify-center flex-col gap-[3vw] relative py-[3vw] pop">
          {status == 200 ? (
            <FaCheck className={`text-green-500 text-[6vw] pop1`} aria-hidden="true" />
          ) : (
            <ImCross className={`text-red-500 text-[6vw] pop1`} />
          )}
          <p className="text-[2.5vw] pop2">
            {status == 200 ? "Email Sent Successfully" : "Error"}
          </p>
          <RxCross1
            className="absolute text-[2vw] top-3 right-3 text-[#7F7F7F] hover:cursor-pointer pop3 "
            onClick={() => setpopshow(false)}
            aria-label="Close popup"
          />
        </div>
      </div>
    </>
  );
};

export default Pop;
