import React, { useState } from "react";
import backgroundImage from "../../assets/login-bg.png";
import { login } from "../../Redux/slice/authThunk";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Input } from "../../Components";
import { toast } from "react-toastify";
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);
  const { register, handleSubmit,reset, formState: { errors } } = useForm();

  const handlelogin = async (data) => {
      reset();
      try {
        const response = await dispatch(login({...data}));
        if (response.meta.requestStatus === "fulfilled") {
          toast.success("LogedIn successfully!");
          navigate("/");
        }else{
          toast.warn("Check your email and password.");
        }
      } catch (error) {
        toast.error(error.message);
      }
  };

  return (
    <div className="h-[100vh] w-[100vw] flex lg:items-center justify-center bg-white pt-20 px-6 md:px-20 lg:py-20 lg:pr-10 lg:pl-36">
          <div className="flex lg:items-center justify-center w-full h-full">
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <div className="flex flex-col justify-center lg:items-center p-4">
                <h1 className="text-6xl font-bold md:text-6xl mb-3 text-center">
                  Welcome to <span className="text-blue-600">Campus-Connect</span>
                </h1>
                {/* <img src={victory} className="h-[100px]" alt="victory imoji" /> */}
                <p className="font-medium text-center px-8 md:px-3 text-black/75">
                  Fill in the details to get started with the best platform!
                </p>
              </div>
              <form onSubmit={handleSubmit(handlelogin)} className="flex flex-col">
              <Input
              type={"email"}
              placeholder={"Enter your Email here"}
              {
                ...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  }, 
              })
              }
                className={"bg-gray-50 outline-none  border ring-1 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "}
              />
              {
                errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )
              }

              <Input
              type={"password"}
              placeholder={"Password"}
              {
                ...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password should be at least 8 characters",
                  },
                })
              }
                className={"bg-gray-50 border outline-none ring-1 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4"}
                
              />
              {
                errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )
              }
                <button
                type="submit" disabled={loading || errors.email || errors.password}
                  className=" mt-8 rounded-full p-4 bg-blue-600 text-white disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  Login
                </button>
              </form>

              <div className=" flex-1 text-end underline font-semibold text-blue-500">
                <Link to="/register">Create new account</Link>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 justify-center items-center p-4">
              <img className="w-full" src={backgroundImage} alt="background login image" />
            </div>
          </div>
        </div>
    
  );
};

export default Auth;
