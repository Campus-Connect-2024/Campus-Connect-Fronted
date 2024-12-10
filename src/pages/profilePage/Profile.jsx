// import React, { useEffect, useState} from "react";
// import { Navbar } from "../../Components";
// import coverImg from "/src/assets/cover.jpg";
// import { useSelector } from "react-redux";
// import {  GET_ALL_POSTS_BY_USER, GET_USER_FOLLOWERS } from "../../utils/constants";
// import { apiClient } from "../../lib/api-client";
// import { setCurrentUserPost } from "../../slice/postSlice";
// import { useDispatch } from "react-redux";
// import CurrentUserPostCard from "../../Components/Container/CurrentUserPostCard";
// import CurrentUserAvatar from "../../Components/Container/CurrentUserAvatar";
// import About from "../../Components/Container/About";
// import AllFreinds from "../../Components/Container/AllFreinds";

// const Profile = () => {
//   const [aboutActive, setAboutActive] = useState(true);
//   const [freindsActive, setFreindsActive] = useState(false);
//   const [postActive, setPostActive] = useState(false);
//   const [followers, setFollowers] = useState(0);
  


//   const dispatch = useDispatch();
//   const currentUser = useSelector((state) => state.auth.userData);
//   console.log("profile currentUser", currentUser);
  
//   const currentUserPost = useSelector((state) => state.post.currentUserPost);

//   useEffect(() => {
//     (async () => {
//       try {
//         console.log(`${GET_ALL_POSTS_BY_USER}${currentUser?._id}`);
//         const userFollowers = await apiClient.get(
//           `${GET_USER_FOLLOWERS}${currentUser?._id}`,
//           { withCredentials: true }
//         )
//         setFollowers(userFollowers.data.data.followers.length);
//         console.log("userFollowers", userFollowers.data.data.followers.length);

//         const currentUserPost = await apiClient.get(
//           `${GET_ALL_POSTS_BY_USER}${currentUser?._id}`,
//           { withCredentials: true }
//         );
//         if (currentUserPost) {
//           console.log("currentUserPost", currentUserPost.data.data);
//           dispatch(setCurrentUserPost(currentUserPost.data.data));
//         }
//       } catch (error) {
//         console.error("currentUserPost_error", error);
//       }
//     })();
    
//   }, []);

//   const AboutHandler = () => {
//     setAboutActive(true);
//     setFreindsActive(false);
//     setPostActive(false);
//   };

//   const FreindsHandler = () => {
//     setAboutActive(false);
//     setFreindsActive(true);
//     setPostActive(false);
//   };

//   const CurrPostHandler = () => {
//     setAboutActive(false);
//     setFreindsActive(false);
//     setPostActive(true);
//   };



//   return (
//     <div className="w-full h-[100vh] fixed top-0 left-0 bg-[#f6f3ef]">
//       <Navbar />

//       <div className="flex m-6 h-[87vh] gap-7 ">
//         <div className="w-1/4  bg-white rounded-2xl ">
//           <div className="w-full h-28 md:h-24 lg:h-24 p-5">
//             <img
//               className=" h-28 md:h-24 lg:h-28 w-full rounded-[1.5rem]"
//               src={currentUser?.coverImage || coverImg}
//               alt="img"
//             />
//           </div>
//           <div className="flex justify-center items-center">
//             <CurrentUserAvatar
//               className=" border-4  w-24 h-[5.5rem]" 
//             />
//           </div>

//           <div className="pt-4 pb-3 px-8">
//             <div>
//               <p className="text-center text-xl font-bold">
//                 {currentUser?.fullName}{" "}
//               </p>
//               <p className="text-center font-normal italic text-gray-700 ">
//                 {`@${currentUser?.username}`}
//               </p>
//             </div>
//             <div className="px-8 pt-2">
//               <p className="text-center text-md font-semibold">
//                 Indian Institute of Information Technology, Bhopal
//               </p>
//             </div>
//             <div className="flex justify-between px-4 pt-5 pb-3">
//               <div>
//                 <p className="text-center text-md font-bold">{followers}</p>
//                 <p className="text-center italic font-normal text-gray-600 hover:text-black">
//                   Followers
//                 </p>
//               </div>
//               <div>
//                 <p className="text-center text-md font-bold">1512</p>
//                 <p className="text-center italic font-normal text-gray-700 hover:text-black">
//                   Following
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="px-8">
//             <p className=" text-xl font-bold">Skills</p>
//             <ul className="flex flex-wrap gap-4 font-normal my-4">
//               <li className="text-black py-1 boder-2 border-gray-700 bg-gray-300 rounded-2xl px-4">
//                 HTML
//               </li>
//               <li className="text-black py-1 boder-2 border-gray-700 bg-gray-300 rounded-2xl px-4">
//                 CSS
//               </li>
//               <li className="text-black py-1 boder-2 border-gray-700 bg-gray-300 rounded-2xl px-4">
//                 JavaScript
//               </li>
//               <li className="text-black py-1 boder-2 border-gray-700 bg-gray-300 rounded-2xl px-4">
//                 Python
//               </li>
//               <li className="text-black py-1 boder-2 border-gray-700 bg-gray-300 rounded-2xl px-4">
//                 C++
//               </li>
//               <li className="text-black py-1 boder-2 border-gray-700 bg-gray-300 rounded-2xl px-4">
//                 ReactJs
//               </li>
//               <li className="text-black py-1 boder-2 border-gray-700 bg-gray-300 rounded-2xl px-4">
//                 C
//               </li>
//             </ul>
//           </div>
//           <div className="px-8">
//             <p className=" text-xl font-bold ">Social Links</p>
//             <div className="py-2">
//               <p className=" text-gray-700 font-semibold ">
//                 Email: {currentUser?.email}
//               </p>
//             </div>
//             <p className="text-center italic font-normal text-gray-700 ">
//               {currentUser?.bio}
//             </p>
//           </div>
//         </div>
//         <div className="w-3/4 bg-white overflow-hidden overflow-y-scroll no-scrollbar rounded-2xl pb-8 px-8 h-auto">
//           <div className=" z-50 sticky top-0 backdrop-blur-sm pt-8" >
//             <div className="w-full px-3 z-50 ">
//               <ul className="flex justify-around">
//                 <li className={`text-xl font-bold hover:text-blue-600 cursor-pointer ${aboutActive && "text-blue-600 underline animate-pulse duration-100"} `} onClick={AboutHandler}>
//                   About
//                 </li>
//                 <li className={`text-xl font-bold hover:text-blue-600 cursor-pointer ${freindsActive && "text-blue-600 underline animate-pulse duration-100"} `} onClick={FreindsHandler}>
//                   Freinds
//                 </li>
//                 <li className={`text-xl font-bold hover:text-blue-600 cursor-pointer ${postActive && "text-blue-600 underline animate-pulse duration-100"} `} onClick={CurrPostHandler}>
//                   Posts({currentUserPost?.length})
//                 </li>
//               </ul>
//             </div>
//             <div className="w-[97%] my-3 mx-4 underline bg-gray-700 h-[2px] flex justify-center items-center sticky top-10 z-50"></div>
//           </div>
//           { currentUserPost?.length > 0 ? (
//             postActive && <div className="w-full px-8 flex flex-wrap gap-6">
//             <h1 className="text-2xl font-bold w-full">
//               Your Posts
//             </h1>
//           {currentUserPost?.map((post) => (
//             <CurrentUserPostCard key={post._id} post={post} />
//           ))}
//         </div>
//           ): (<div className="text-[4.5rem] font-bold flex justify-center items-center h-full">No Posts 😒</div>)}
//           {
//             aboutActive && <About />
//           }
//           {
//             freindsActive && <AllFreinds />
//           }
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import { Navbar } from "../../Components";
import coverImg from "/src/assets/cover.jpg";
import { useSelector } from "react-redux";
import { GET_ALL_POSTS_BY_USER, GET_USER_FOLLOWERS } from "../../utils/constants";
import { apiClient } from "../../lib/api-client";
import { setCurrentUserPost } from "../../Redux/slice/postSlice.js";
import { useDispatch } from "react-redux";
import {CurrentUserAvatar, CurrentUserPostCard, About, AllFreinds} from "../../Components/index.js"


const Profile = () => {
  const [aboutActive, setAboutActive] = useState(true);
  const [freindsActive, setFreindsActive] = useState(false);
  const [postActive, setPostActive] = useState(false);
  const [followers, setFollowers] = useState(0);
  
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.userData);
  const currentUserPost = useSelector((state) => state.post.currentUserPost);

  useEffect(() => {
    (async () => {
      try {
        const userFollowers = await apiClient.get(
          `${GET_USER_FOLLOWERS}${currentUser?._id}`,
          { withCredentials: true }
        );
        setFollowers(userFollowers.data.data.followers.length);

        const currentUserPost = await apiClient.get(
          `${GET_ALL_POSTS_BY_USER}${currentUser?._id}`,
          { withCredentials: true }
        );
        if (currentUserPost) {
          dispatch(setCurrentUserPost(currentUserPost.data.data));
        }
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
                <li
                  className={`text-xl font-bold hover:text-blue-600 cursor-pointer ${postActive && "text-blue-600 underline"}`}
                  onClick={CurrPostHandler}
                >
                  Posts ({currentUserPost?.length})
                </li>
              </ul>
            </div>
            <div className="w-full my-3 h-[2px] bg-gray-700" />
          </div>
          {currentUserPost?.length > 0 ? (
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
          )}
          {aboutActive && <About />}
          {freindsActive && <AllFreinds />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
