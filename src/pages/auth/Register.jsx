import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../../Redux/slice/authThunk";
import resisterImage from "../../assets/resister-bg.png";
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateSignup = () => {
    if (!email.length) {
      console.error("Email is required!");
      return false;
    }
    if (!password.length) {
      console.error("Password is required!");
      return false;
    }

    // if(password.length < 8){
    //   toast.error("Password should be at least 8 characters!");
    //   return false;
    // }

    if (password !== confirmPassword) {
      console.error("Password and confirm password should be the same!");
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    if (validateSignup()) {
      const response = await dispatch(
        register({ email, password, fullName, username })
      );
      console.log("register_response ", response);
      if (response) {
        const login_res = await dispatch(login({ email, password }));
      }
    }
  };

  return (
    <div className="h-screen w-full flex lg:items-center justify-center pt-16 px-5 lg:pl-32 lg:pr-10 lg:py-20 bg-white">
          <div className="flex justify-center lg:items-center w-full">           
            <div className="flex flex-col lg:items-center gap-6 w-full md:w-1/2">
            <div className="flex justify-center  mt-3">
              <h1 className="text-5xl font-bold md:text-6xl text-center">Welcome to <span className="text-blue-600">Campus-Connect</span></h1>
            </div>
              <input
                placeholder="Email"
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Full Name"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                placeholder="Username"
                required="true"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                placeholder="Password"
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                placeholder="Confirm Password"
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                className="rounded-full p-4 w-full md:w-[60%] text-white bg-blue-600 hover:bg-blue-500"
                onClick={handleSignup}
              >
                Sign Up
              </button>
              <div className="text-center mt-[-10px]">
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer underline font-semibold bold text-lg hover:text-blue-500"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </div>
            </div>
            <div className="hidden lg:block  lg:w-1/2">
              <img src={resisterImage} alt="Resister Image" className="w-full" />
            </div>
          </div>
          
        </div>
    
  );
};

export default Auth;
