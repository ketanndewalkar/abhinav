import React from 'react'

const Signup = () => {
  return (
    <>
    <div className="w-dvw h-dvh p-[4vw] fixed top-0 left-0 z-200 overflow-hidden login10">
      <div className="size-full bg-white z-100 relative flex rounded-2xl overflow-hidden login11 dk:justify-center">
        <Link to="/"><span className="w-full flex justify-end absolute top-0 p-[1vw] text-[2vw] login111">
          <RxCross1 className="text-gray-500 hover:text-black hover:cursor-pointer login1111" />
        </span>
        </Link>
        <div className="w-1/2 h-full bg-white p-[3vw] login112">
          <div className="size-full flex items-center flex-col login1121 dk:justify-center">
            <div className="w-full login11211">
              <img src="logo1.png" className="mix-blend-multiply h-[5vw] brandlogologin" />
            </div>
            <h1 className="font-bold text-[2.5vw] font-serif mt-[1vw] w-full text-center text-gray-800 login11212">
              Welcome Back
            </h1>
            <p className="text-gray-400 w-full text-center login11213">
              Enter your email and password to access your account.
            </p>
            <div className="mt-[3vw] w-full px-[3vw] login11214">
              <label htmlFor="email" className="">
                <p className="">Email:</p>
                <input
                  type="text"
                  placeholder="Email"
                  className="focus:outline-none border-2 login112141 border-gray-100 bg-gray-300 w-full py-[0.5vw] rounded-lg px-[0.5vw] mt-[0.5vw] "
                />
              </label>
              <label htmlFor="password" className="">
                <p className="mt-[1vw] login112142">Password:</p>
                <input
                  type="password"
                  placeholder="Password"
                  className="focus:outline-none border-2 login112141 border-gray-100 bg-gray-300 w-full py-[0.5vw] rounded-lg px-[0.5vw] mt-[0.5vw] "
                />
              </label>
              <button className="loginbtn w-full py-[0.7vw] bg-red-700 text-white font-bold rounded-lg mt-[2vw] hover:cursor-pointer active:scale-95 transition-transform duration-300 ease-in-out ">
                Log In
              </button>
              <div className="h-[1px] w-full bg-gradient-to-r from-white via-black to-white mt-[3vw] login112143"></div>
              <span className="flex justify-center mt-[1vw]">
                <p>
                  Dont`t have an Account ?{" "}
                  <span className="text-red-700 hover:text-red-900 hover:cursor-pointer">
                    Register Now
                  </span>
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center bg-[#fcfcfc] login113 px-[2vw]">
          <img src="loginimage.png" className="" />
        </div>
      </div>
      <div className="size-full absolute top-0 left-0 bg-black opacity-30 z-99 login11"></div>
    </div>
    </>
  )
}

export default Signup