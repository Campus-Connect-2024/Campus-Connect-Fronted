import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  signup } from "../../Redux/slice/authThunk";
import resisterImage from "../../assets/resister-bg.png";
import { useForm } from "react-hook-form";
import { Input, Button, LoadingPage } from "../../Components";
import { toast } from "react-toastify";
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

  const handleSignup =  async (data) => {
    reset();
    console.log("data", data);
    // const { email,  fullName, username, password, confirmPassword } = data;
      const response = await dispatch(signup({...data}));
      // console.log("register_response ", response);
      if (response.meta.requestStatus === "fulfilled") {
        toast.success("Registration successful!");
        navigate("/login");
      }else{
        toast.warn("Please check all the fields.");
      }
      console.log("register_response ", response.arg);
  };

  if(loading){
    return(
      <LoadingPage/>
    )
  };

  return (
    <div className="h-screen w-full flex lg:items-center justify-center pt-16 px-6 lg:pl-32 lg:pr-10 lg:py-16 bg-white">
          <div className="flex justify-center lg:items-center w-full">           
            <div className="flex flex-col lg:items-center gap-6 w-full md:w-1/2">
            <div className="flex justify-center  mt-3">
              <h1 className="text-5xl font-bold  text-center">Welcome to <span className="text-blue-600 text-4xl md:text-5xl">Campus-Connect</span></h1>
            </div>
            <form onSubmit={handleSubmit(handleSignup)} className="flex flex-col w-full">
              <Input
                placeholder={"Enter your Email here"}
                type={"email"}
                className={"bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4"}
                {
                  ...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })
                }
              />
              {
                errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )
              }
              <Input
                placeholder={"Enter your Full Name"}
                type={"text"}
                className={"bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 mt-4"}
                {
                  ...register("fullName", {
                    required: "Full Name is required",
                  })
                }
              />
              {
                errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                )
              }
              <Input
                placeholder={"Enter your Username"}
                type={"text"}
                className={"bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 mt-4"}
                {
                  ...register("username", {
                    required: "Username is required",
                  })
                }
              />
              {
                errors.username && (
                  <p className="text-red-500 text-sm">{errors.username.message}</p>
                )
              }
              <Input
                placeholder={"Enter your Password"}
                type={"password"}
                className={"bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 mt-4"}
                {
                  ...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })
                }
              />
              {
                errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )
              }
              <Input
                placeholder={"Enter your Confirm Password"}
                type={"password"}
                className={"bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 mt-4"}
                {
                  ...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) => value === watch("password") || "Confirm Password does not match to Password",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })
                }
              />
              {
                errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                )
              }
              <Button
              btn_text="Sign Up"
              type="submit"
              disabled={loading || errors.email || errors.fullName || errors.username || errors.password || errors.confirmPassword} 
              className="rounded-full p-4 w-full text-white bg-blue-600 hover:bg-blue-500 mt-6 disabled:bg-blue-400 disabled:cursor-not-allowed"
              />
              </form>
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
