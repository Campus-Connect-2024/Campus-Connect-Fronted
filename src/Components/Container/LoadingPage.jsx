// import React from 'react'

// const LoadingPage = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
//       {/* Campus-Connect Title */}
//       <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-8 animate-pulse">
//         Campus Connect
//       </h1>

//       {/* Spinning Loader */}
//       <div className="flex justify-center items-center space-x-2">
//         <div className="w-8 h-8 border-4 border-blue-400 border-solid rounded-full animate-spin border-t-transparent"></div>
//       </div>

//       {/* Loading Text */}
//       <p className="mt-6 text-lg text-gray-600">Loading, please wait...</p>
//     </div>
//   );
// }

// export default LoadingPage

import React from "react";
import { FaSpinner } from "react-icons/fa"; // React icons for the spinner
import logo from "../../assets/Campus.svg"; // Import the logo image

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
