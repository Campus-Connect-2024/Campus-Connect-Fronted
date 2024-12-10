import React, { useState } from "react";
import CampusSvg from "/src/assets/Campus.svg";
import logoutSvg from "/src/assets/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/slice/authThunk";
import { useDispatch, useSelector } from "react-redux";
import {CurrentUserAvatar} from "../index.js";
import { FiAlignRight } from "react-icons/fi";
import { navLinks } from "../../utils/constants";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state for mobile menu
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const logoutHandler = async () => {
    try {
      const res = await dispatch(logout());
      console.log("logout res: ", res);
    } catch (error) {
      console.log("logout_error", error);
    }
  };

  return (
    <nav className="w-full flex justify-between px-4 lg:px-[3.4rem] py-4 bg-white items-center shadow-md">
      {/* Left Section */}
      <div className="flex items-center">
        <Link to="/">
          <img className="w-8 md:w-10" src={CampusSvg} alt="campus-logo" />
        </Link>

        {/* Search Input */}
        <input
          placeholder="# explore"
          className="hidden md:block rounded-xl border-none outline-none bg-gray-200 px-4 py-1 ml-4 md:ml-6 placeholder:font-semibold text-gray-700 w-28 lg:w-40"
        />
      </div>

      {/* Right Section - Avatar and Hamburger */}
      <div className="flex items-center gap-3 lg:gap-5">
        {/* Profile Avatar and Name */}
        <Link
          className="flex items-center gap-2 lg:gap-3 md:hidden"
          to="/profile"
        >
          <CurrentUserAvatar className="w-8 h-8 lg:w-10 lg:h-10" />
          <span className="font-semibold text-gray-600 hidden md:block">
            {currentUser?.fullName}
          </span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FiAlignRight className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Middle Links Section (Hidden on Mobile, Visible on Larger Screens) */}
      <div className={`flex-1 md:flex hidden justify-center items-center`}>
        <ul className="flex justify-center items-center gap-6 lg:gap-14 font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>
                <img className=" w-6 lg:w-7" src={link.image} alt="home" />
              </Link>
            </li>
          ))}
        </ul>
        
      </div>

      <div className="hidden md:flex justify-end items-center gap-5">
          <Link className="flex items-center gap-2 lg:gap-3" to="/profile">
            <CurrentUserAvatar className="w-8 h-8 lg:w-10 lg:h-10" />
            <span className="font-semibold text-gray-600 hidden md:block">
              {currentUser?.fullName}
            </span>
          </Link>
          <button onClick={logoutHandler} className="flex items-center gap-2">
            <img className="w-5" src={logoutSvg} alt="logout" />
            Logout
          </button>
        </div>

      {/* Mobile Menu - Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-14 right-0 bg-white shadow-lg p-4 w-60 md:hidden">
          <ul className="flex flex-col gap-4 font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <img className="w-6" src={link.image} alt="home" />
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <button
                onClick={logoutHandler}
                className="flex items-center gap-2"
              >
                <img className="w-5" src={logoutSvg} alt="logout" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
