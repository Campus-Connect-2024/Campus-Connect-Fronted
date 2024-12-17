import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import coverImg from "/src/assets/cover.jpg"
import {CurrentUserAvatar} from "./index.js"
import { useDispatch, useSelector } from 'react-redux'
import { GET_USER_FOLLOWERS } from '../utils/constants.js'
import { apiClient } from '../lib/api-client.js'

function ProfileCard(className) {
    const [followers, setFollowers] = useState(0);
    const currentUser = useSelector((state) => state.auth.userData);
    console.log("current user", currentUser);
    const dispatch = useDispatch();

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
  }, [currentUser]);
    
  return (
    <div className="bg-white rounded-[1.8rem] w-full md:w-[14vw] lg:w-full text-black shadow-md border-2 border-white  ">
        <div className='w-full h-28 md:h-24 lg:h-24 p-5 '>
        <img className=' h-28 md:h-24 lg:h-28 w-full rounded-[1.5rem]' src={currentUser?.coverImage || coverImg} alt="img" />
        </div>
        <div className='flex justify-center items-center'>
            <CurrentUserAvatar className=" border-4  w-24 h-[5.5rem]" />
        </div>
       
        <div className='pt-4 pb-5 px-8'>
        <div >
            <p className='text-center text-xl font-bold'>{currentUser?.fullName} </p>
            <p className='text-center font-normal italic text-gray-700 '>@{currentUser?.username} </p>
        </div>
        
        <div className='flex justify-between px-4 pt-5 pb-8'>
            <div>
                <p  className='text-center text-md font-bold'>{followers}</p>
                <p className='text-center italic font-normal text-gray-600 hover:text-black'>Followers</p>
            </div>
            <div>
                <p className='text-center text-md font-bold'>{0}</p>
                <p className='text-center italic font-normal text-gray-700 hover:text-black'>Following</p>
            </div>
        </div>
        <Link to="/profile" >
        <div className='p-3 cursor-pointer bg-blue-500 rounded-2xl flex justify-center items-center text-white hover:bg-blue-400'> 
            <p  className='font-semibold '>My Profile</p> 
        </div>
        </Link>
        </div>
        
    </div>
  )
}

export default ProfileCard