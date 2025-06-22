import React from "react";

const Loader = ({color="blue"}) => {
  return (
    <div className="flex justify-center items-center h-[30%] ml-2">
      <div
        className={`w-6 h-6 border-4 border-${color}-500 border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Loader;

