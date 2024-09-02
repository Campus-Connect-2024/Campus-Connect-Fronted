import React from "react";
import CampusSvg from "/src/assets/Campus.svg";
import Homesvg from "/src/assets/Home.svg";
import msgSvg from "/src/assets/message.svg";
import logoutSvg from "/src/assets/logout.svg";
import groupsvg from "/src/assets/peoplegroup.svg";
import { Link, useNavigate } from "react-router-dom";

import { apiClient } from "../../lib/api-client";
import { LOGOUT_ROUTE } from "../../utils/constants";
import { logout } from "../../slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import CurrentUserAvatar from "../Container/CurrentUserAvatar";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const logoutHandler = async () => {
    try {
      const response = await apiClient.post(LOGOUT_ROUTE, {}, {
        withCredentials: true
      });
      console.log({ response });
      if (response.status === 200) {
        dispatch(logout());
        navigate("/login");
      }
    } catch (error) {
      console.log("logout_error", error);
    }
  };
  return (
    <nav className="w-full  flex justify-between px-[3.4rem] py-4 bg-white items-center">
      <div className="flex">
        <Link to="/dashboard">
          <img className="w-10" src={CampusSvg} />
        </Link>

        <input
          placeholder="# explore"
          className="rounded-xl border-none  outline-none  bg-gray-200  px-4 py-1 ml-6 placeholder:font-semibold text-gray-700"
        />
        <div className="flex">
          <ul className="flex justify-center items-center gap-14 ml-14 font-semibold">
            <li>
              <Link to="/dashboard">
                <img className="hover:bg-blue-600 w-7" src={Homesvg} />{" "}
              </Link>
            </li>
            <li>
              <Link to="/message">
                <img className="hover:bg-blue-600 w-7" src={msgSvg} />{" "}
              </Link>
            </li>
            <li>
              <Link to="/communities">
                <img className="hover:fill-blue-600 w-7" src={groupsvg} />{" "}
              </Link>
            </li>
            <li>
              <Link to="/all-people">All People</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <Link className="flex gap-3 justify-center items-center" to="/profile">
          <CurrentUserAvatar  className="w-10 h-10" />
          <span className="font-semibold text-gray-600">{currentUser?.fullName}</span>
        </Link>
        <div className="">
          <button onClick={logoutHandler}>
            <img className="hover:fill-blue-600 w-5" src={logoutSvg} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
