import React, { useEffect, useState } from "react";
import { Navbar } from "../../Components";
import coverImg from "/src/assets/cover.jpg";
import { useSelector } from "react-redux";
import { GET_USER_FOLLOWERS } from "../../utils/constants";
import { apiClient } from "../../lib/api-client";
import { useDispatch } from "react-redux";
import {CurrentUserAvatar, CurrentUserPostCard, About, AllFreinds} from "../../Components/index.js"


const Profile = () => {
  const [aboutActive, setAboutActive] = useState(true);
  const [freindsActive, setFreindsActive] = useState(false);
  const [postActive, setPostActive] = useState(false);
  const [followers, setFollowers] = useState(0);
  
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.userData);
  // const currentUserPost = useSelector((state) => state.post.currentUserPost);

  useEffect(() => {
    (async () => {
      try {
        const userFollowers = await apiClient.get(
          `${GET_USER_FOLLOWERS}${currentUser?._id}`,
          { withCredentials: true }
        );
        console.log("userFollowers", userFollowers.data.data);
        setFollowers(userFollowers.data.data.followers.length);
        
        
      } catch (error) {
        console.error("currentUserPost_error", error);
      }
    })();
  }, [currentUser, dispatch]);

  const AboutHandler = () => {
    setAboutActive(true);
    setFreindsActive(false);
    setPostActive(false);
  };

  const FreindsHandler = () => {
    setAboutActive(false);
    setFreindsActive(true);
    setPostActive(false);
  };

  const CurrPostHandler = () => {
    setAboutActive(false);
    setFreindsActive(false);
    setPostActive(true);
  };

  return (
    <div className="w-full h-screen bg-[#f6f3ef] overflow-hidden">
      <Navbar />

      <div className="flex flex-col md:flex-row m-6 h-[87vh] gap-7">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white rounded-2xl overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="w-full h-28 md:h-24 p-5">
            <img
              className="h-full w-full rounded-[1.5rem] object-cover"
              src={currentUser?.coverImage || coverImg}
              alt="Cover"
            />
          </div>
          <div className="flex justify-center items-center">
            <CurrentUserAvatar className="border-4 w-24 h-24" />
          </div>
          <div className="pt-4 pb-3 px-8">
            <div>
              <p className="text-center text-xl font-bold">
                {currentUser?.fullName}
              </p>
              <p className="text-center font-normal italic text-gray-700">
                {`@${currentUser?.username}`}
              </p>
            </div>
            <div className="px-8 pt-2">
              <p className="text-center text-md font-semibold">
                Indian Institute of Information Technology, Bhopal
              </p>
            </div>
            <div className="flex justify-between px-4 pt-5 pb-3">
              <div>
                <p className="text-center text-md font-bold">{followers}</p>
                <p className="text-center italic font-normal text-gray-600 hover:text-black">
                  Followers
                </p>
              </div>
              <div>
                <p className="text-center text-md font-bold">1512</p>
                <p className="text-center italic font-normal text-gray-700 hover:text-black">
                  Following
                </p>
              </div>
            </div>
          </div>
          <div className="px-8">
            <p className="text-xl font-bold">Skills</p>
            <ul className="flex flex-wrap gap-4 font-normal my-4">
              {["HTML", "CSS", "JavaScript", "Python", "C++", "ReactJs", "C"].map(skill => (
                <li key={skill} className="text-black py-1 border-2 border-gray-700 bg-gray-300 rounded-2xl px-4">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-8">
            <p className="text-xl font-bold">Social Links</p>
            <div className="py-2">
              <p className="text-gray-700 font-semibold">
                Email: {currentUser?.email}
              </p>
            </div>
            <p className="text-center italic font-normal text-gray-700">
              {currentUser?.bio}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 bg-white overflow-y-auto max-h-[80vh] rounded-2xl pb-8 px-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="sticky top-0 bg-white z-50 shadow-md pt-8">
            <div className="w-full px-3">
              <ul className="flex justify-around">
                <li
                  className={`text-xl font-bold hover:text-blue-600 cursor-pointer ${aboutActive && "text-blue-600 underline"}`}
                  onClick={AboutHandler}
                >
                  About
                </li>
                <li
                  className={`text-xl font-bold hover:text-blue-600 cursor-pointer ${freindsActive && "text-blue-600 underline"}`}
                  onClick={FreindsHandler}
                >
                  Friends
                </li>
                {/* <li
                  className={`text-xl font-bold hover:text-blue-600 cursor-pointer ${postActive && "text-blue-600 underline"}`}
                  onClick={CurrPostHandler}
                >
                  Posts ({currentUserPost?.length})
                </li> */}
              </ul>
            </div>
            <div className="w-full my-3 h-[2px] bg-gray-700" />
          </div>
          {/* {currentUserPost?.length > 0 ? (
            postActive && (
              <div className="w-full px-8 flex flex-wrap gap-6">
                <h1 className="text-2xl font-bold w-full">Your Posts</h1>
                {currentUserPost?.map((post) => (
                  <CurrentUserPostCard key={post._id} post={post} />
                ))}
              </div>
            )
          ) : (
            <div className="text-[4.5rem] font-bold flex justify-center items-center h-full">No Posts 😒</div>
          )} */}
          {aboutActive && <About />}
          {freindsActive && <AllFreinds />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
