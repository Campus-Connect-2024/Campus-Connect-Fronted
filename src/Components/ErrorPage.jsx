import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import "./ErrorPage.css";

const ErrorPage =() => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r dark:from-gray-900 dark:via-black dark:to-gray-900 from-gray-200 via-gray-300 to-gray-200 dark:text-gray-100 text-gray-800 glitch-container m-0 p-0">
      {/* Glitch Effect on Icon */}
      <div className="relative glitch mb-4">
        <FaExclamationTriangle className="text-red-500 text-8xl md:text-10xl glitch__layer" />
        <FaExclamationTriangle className="absolute top-0 left-0 text-blue-500 text-8xl md:text-10xl glitch__layer glitch__layer--1" />
        <FaExclamationTriangle className="absolute top-0 left-0 text-green-500 text-8xl md:text-10xl glitch__layer glitch__layer--2" />
      </div>

      {/* Glitch Effect on 404 */}
      <div className="relative text-7xl md:text-9xl lg:text-[10rem] font-extrabold dark:text-white glitch mb-4">
        404
        <span className="absolute top-0 left-0 text-red-500 glitch__layer glitch__layer--1">404</span>
        <span className="absolute top-0 left-0 text-blue-500 glitch__layer glitch__layer--2">404</span>
      </div>

      {/* Glitch Effect on Error Message */}
      <p className="relative text-2xl md:text-3xl text-center mb-8 glitch">
        Oops! The page you're looking for doesn't exist.
        <span className="absolute top-0 left-0 text-red-500 glitch__layer glitch__layer--1">Oops! The page you're looking for doesn't exist.</span>
        <span className="absolute top-0 left-0 text-blue-500 glitch__layer glitch__layer--2">Oops! The page you're looking for doesn't exist.</span>
      </p>

      {/* Glitch Effect on Button */}
     
        <button onClick={() => navigate("/login")} className="relative px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-500 transition-all glitch">
          Back to Homepage
          <span className="absolute top-0 left-0 text-red-500 glitch__layer glitch__layer--1">Back to Homepage</span>
          <span className="absolute top-0 left-0 text-blue-500 glitch__layer glitch__layer--2">Back to Homepage</span>
        </button>
      
      
    </div>
  );
}

export default ErrorPage;

