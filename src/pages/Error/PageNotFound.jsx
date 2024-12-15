import React, { useState } from "react";
import img from "../../assets/404_img.png";
import img1 from "../../assets/404_img1.png";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
    const [click, setClick] = useState(false);
    const navigate = useNavigate();
    return (
        <div onClick={() => setClick(!click)} className="relative flex flex-col items-center justify-center min-h-screen bg-white text-black overflow-hidden px-4">
          {/* Text Above */}
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold uppercase tracking-widest mb-4 text-center z-10">
            WHY BRO, WHY DID YOU DO THAT...
          </h2>
    
          {/* Big 404 with Positioned Image */}
          <div className="relative">
            {/* Big 404 Text */}
            <h1 className="text-[8rem] sm:text-[12rem] md:text-[18rem] lg:text-[22rem] font-extrabold text-gray-300 leading-none select-none z-0">
              404
            </h1>
    
            {/* Astronaut Image Positioned at Center-Top of the 0 */}
            <img
              src={click ? img1 : img} // Replace with your image path
              alt="Astronaut"
              className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 sm:w-32 md:w-40 lg:w-60 object-contain"
            />
          </div>
    
          {/* "You Just Hit End" Text */}
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 uppercase mt-4 mb-4 text-center">
            You Just Hit End
          </p>
    
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-black text-white font-medium uppercase rounded-md shadow-md hover:bg-gray-800 transition duration-300"
          >
            Let's Go Back
          </button>
        </div>
      );
};

export default PageNotFound;
