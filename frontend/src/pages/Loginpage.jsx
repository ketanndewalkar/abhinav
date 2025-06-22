import React, { useContext, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/loader";

const Loginpage = () => {
  const [loginpage, setloginpage] = useState(true);
  const [showsigup, setshowsigup] = useState(false);
  const { login } = useContext(AuthContext);
  const [state, setstate] = useState(0);
  const navigate = useNavigate();
  const [show, setshow] = useState(false);
  const [loader, setloader] = useState(false);
  const [msg, setmsg] = useState(null);
  const [status, setstatus] = useState(0);

  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleshow = (e) => {
    console.log(e);
    setshow((prev) => !prev);
  };
  const handleform = (e) => {
    if (loginpage) {
      if (formdata.email == "" || formdata.password == "") {
        alert("All Field are required");
      } else {
        handlelogin(e);
      }
    } else {
      if (
        formdata.email == "" ||
        formdata.password == "" ||
        formdata.username == ""
      ) {
        alert("All Field are required");
      } else {
        handleSubmit(e);
      }
    }
  };
  const handlelogin = (e) => {
    e.preventDefault();
    setloader(true);
    console.log(JSON.stringify(formdata));
    fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        setstatus(res.status);
        if (res.status === 200) {
          const { token, user, message } = await res.json();
          login(token, user);
          setmsg(message);
          setloader(false);
          setTimeout(() => {
            navigate("/");
            setstate(1);
          }, 1000);
        } else {
          const { message } = await res.json();
          setmsg(message);
          setloader(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloader(true);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        setstatus(res.status);
        if (res.status === 200) {
          const e = await res.json();
          const { token, user, message } = e;
          console.log(e);
          login(token, user);
          setmsg(message);
          setloader(false);
          navigate("/");
          setstate(1);
        } else {
          const { message } = await res.json();
          setmsg(message);
          setloader(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  };

  // useEffect(() => {
  //   setshow(false);
  //   setformdata({
  //     username: "",
  //     email: "",
  //     password: "",
  //     confirm_password: "",
  //   });
  // },[]);

  return (
    <div className="w-dvw h-dvh p-[4vw] absolute top-0 left-0 z-200 overflow-hidden login10">
      <div className="size-full bg-white z-100 relative flex rounded-2xl overflow-hidden login11 dk:justify-center login10">
        <Link to="/">
          <span className="w-full flex justify-end absolute top-0 p-[1vw] text-[2vw] login111">
            <RxCross1 className="text-gray-500 hover:text-black hover:cursor-pointer login1111" />
          </span>
        </Link>
        <div className="w-1/2 h-full bg-white p-[3vw] login112">
          <div className="size-full flex items-center flex-col login1121 dk:justify-center">
            <div className="w-full login11211">
              <img
                src="logo1.png"
                className="mix-blend-multiply h-[5vw] brandlogologin"
              />
            </div>
            <h1 className="font-bold text-[2.5vw] font-serif mt-[1vw] w-full text-center text-gray-800 login11212">
              Welcome Back
            </h1>
            <p className="text-gray-400 w-full text-center login11213">
              Enter your email and password to access your account.
            </p>
            <div className="mt-[3vw] w-full px-[3vw] login11214">
              {!loginpage ? (
                <label htmlFor="username" className="">
                  <p className="">Username:</p>
                  <input
                    type="text"
                    placeholder="username123"
                    name="username"
                    value={formdata.username}
                    className="focus:outline-none border-2 login112141 border-gray-300 bg-[#f5f5f5] w-full py-[0.5vw] rounded-lg px-[0.5vw] mt-[0.5vw] "
                    onChange={(e) =>
                      setformdata((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </label>
              ) : (
                ""
              )}
              <label htmlFor="email" className="">
                <p className="mt-[1vw] login112142">Email:</p>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  name="email"
                  value={formdata.email}
                  onChange={(e) =>
                    setformdata((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  className="focus:outline-none border-2 login112141 border-gray-300 bg-[#f3f3f3] w-full py-[0.5vw] rounded-lg px-[0.5vw] mt-[0.5vw] "
                />
              </label>
              <label htmlFor="password" className="">
                <p className="mt-[1vw] login112142">Password:</p>
                <input
                  placeholder="•••••••"
                  name="password"
                  type={show ? "text" : "password"}
                  value={formdata.password}
                  onChange={(e) =>
                    setformdata((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  className="focus:outline-none border-2 login112141 border-gray-300 bg-[#f5f5f5] w-full py-[0.5vw] rounded-lg px-[0.5vw] mt-[0.5vw] "
                />
              </label>
              <label
                htmlFor="show"
                className="mt-[0.5vw] login112142 flex gap-[0.5vw] hover:cursor-pointer w-fit"
              >
                <input
                  type="checkbox"
                  id="show"
                  className="accent-red-600"
                  onChange={(e) => {
                    console.log("Hello");
                    if (e.target.checked) {
                      setshow(true);
                    } else {
                      setshow(false);
                    }
                  }}
                />
                <p className="">Show Passowrd</p>
              </label>
              <button
                className="loginbtn w-full py-[0.7vw] bg-red-700 text-white font-bold rounded-lg mt-[2vw] hover:cursor-pointer active:scale-95 transition-transform duration-300 ease-in-out "
                onClick={handleform}
              >
                {loader ? <Loader /> : loginpage ? "Log In" : "Sign Up"}
              </button>
              <p className={`text-${status === 200 ? "green" : "red"}-600`}>
                {msg}
              </p>
              <div className="h-[1px] w-full bg-gradient-to-r from-white via-black to-white mt-[3vw] login112143"></div>
              <span className="flex justify-center mt-[1vw] short">
                {loginpage ? (
                  <p>
                    Dont`t have an Account ?{" "}
                    <span
                      className="text-red-700 hover:text-red-900 hover:cursor-pointer"
                      onClick={() => setloginpage(false)}
                    >
                      Register Now
                    </span>
                  </p>
                ) : (
                  <p>
                    Already have an Account ?{" "}
                    <span
                      className="text-red-700 hover:text-red-900 hover:cursor-pointer"
                      onClick={() => {
                        setloginpage(true);
                        setmsg("");
                      }}
                    >
                      Login
                    </span>
                  </p>
                )}
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
  );
};

export default Loginpage;
