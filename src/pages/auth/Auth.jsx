import React, { useState } from "react";
import backgroundImage from "../../assets/login-bg.png";
import { login } from "../../Redux/slice/authThunk";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../utils/HelperFunctions";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");

  const { loading } = useSelector((state) => state.auth);

  const validateLogin = () => {
    if (!email.length) {
      console.log("Email is required!");
      return false;
    }
    if (!password.length) {
      console.error("Password is required!");
      return false;
    }
    return true;
  };

  const handlelogin = async () => {
    if (validateLogin()) {
      try {
        const response = await dispatch(login({ email, password }));

        if (response.data.user) {
          navigate("/");
        }

        console.log("login response:", { response });
      } catch (error) {
        setError(error);
        console.error("login_error", error.response.status);
      }
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] flex lg:items-center justify-center bg-white pt-20 px-4 lg:py-20 lg:pr-10 lg:pl-36">
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
                {Error && (
                  <p className="font-medium text-center  text-red-600">
                    User Doesn't Exist. Create an account
                  </p>
                )}
              </div>

              <input
                type="email"
                className="bg-gray-50 outline-none  border ring-1 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                placeholder="demo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                className="bg-gray-50 border outline-none ring-1 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="md:text-end hidden md:block underline text-blue-500">
                <Link to="/register">Create new account</Link>
              </div>

              {loading ? (
                <span>Loading....... </span>
              ) : (
                <button
                  className="rounded-full p-4 bg-blue-600 text-white"
                  onClick={handlelogin}
                >
                  Login
                </button>
              )}

              <div className="md:hidden flex-1 text-center underline text-blue-500">
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
