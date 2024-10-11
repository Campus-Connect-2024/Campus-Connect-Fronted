import React from "react";
import { FaSpinner } from "react-icons/fa"; // React icons for the spinner
import logo from "../assets/Campus.svg"; // Import the logo image

function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      {/* bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 */}
      {/* Campus-Connect Logo */}
      <div className="mb-8">
        <img
          src={logo}
          alt="Campus Connect Logo"
          className="w-40 md:w-56 lg:w-64 object-contain animate-pulse"
        />
      </div>

      {/* Spinning Loader */}
      <div className="flex justify-center items-center space-x-4">
        <FaSpinner className="animate-spin text-6xl" />
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-lg md:text-xl font-medium animate-bounce">
        Preparing your campus experience...
      </p>
    </div>
  );
}

export default LoadingPage;
