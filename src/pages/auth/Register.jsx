import React, { useState } from "react";
import victory from "../../assets/victory.svg";
import backgroundImage from "../../assets/login2.png";

import { apiClient } from "../../lib/api-client";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../slice/authSlice";

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
      console.error("Password and confirm password should be same!");
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    if (validateSignup()) {
      const response = await apiClient.post(
        REGISTER_ROUTE,
        { email, password, fullName, username},
        { withCredentials: true }
      );
      if (response.status === 201) {
        console.log("response ", response.data);
        dispatch(setUserInfo(response.data));
        navigate("/posts");
      }

      console.log(response.data);
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh]  bg-white border-2 border-white text-opacity-90 shadow-2xl shadow-black w-[90vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl   ">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex  justify-center items-center mt-3">
              <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
              <img
                src={victory}
                className="lg:h-[100px] h-20"
                alt="victory imoji"
              />
            </div>
          </div>
          <div className="flex justify-center items-center  w-full ">
            <div className="flex flex-col  items-center gap-8 w-[70%]">
              <input
                placeholder="Email"
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="FullName"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                placeholder="userName"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />

              <input
                placeholder="Password"
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                placeholder="Confirm Password"
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                className="rounded-full p-4 w-[60%] lg:w-[30%] text-white bg-blue-600"
                onClick={handleSignup}
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
