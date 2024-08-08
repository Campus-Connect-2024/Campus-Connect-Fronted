import React from 'react'
import { Link } from 'react-router-dom'
import reactImg from "/src/assets/icon.jpeg"
import ProfileImage from '../ProfileImage'

function ProfileCard(className) {
  return (
    <div className="bg-white rounded-[1.8rem] w-full md:w-[14vw] lg:w-full text-black shadow-md border-2 border-white  ">
        <div className='w-full h-28 md:h-24 lg:h-24 p-5 '>
        <img className=' h-28 md:h-24 lg:h-28 w-full rounded-[1.5rem]' src={reactImg} alt="img" />
        </div>
        <div className='flex justify-center items-center'>
            <ProfileImage className=" border-4  w-24 h-[5.5rem]" imgUrl={reactImg}/>
        </div>
       
        <div className='pt-4 pb-5 px-8'>
        <div >
            <p className='text-center text-xl font-bold'>Ravindra Yadav </p>
            <p className='text-center font-normal italic text-gray-700 '>@Ravindra01 </p>
        </div>
        
        <div className='flex justify-between px-4 pt-5 pb-8'>
            <div>
                <p  className='text-center text-md font-bold'>985</p>
                <p className='text-center italic font-normal text-gray-600 hover:text-black'>Followers</p>
            </div>
            <div>
                <p className='text-center text-md font-bold'>1512</p>
                <p className='text-center italic font-normal text-gray-700 hover:text-black'>Following</p>
            </div>
        </div>
        
        <div className='p-3 cursor-pointer bg-blue-500 rounded-2xl flex justify-center items-center text-white hover:bg-blue-400'> 
            <Link to="/profile" className='font-semibold '>My Profile</Link> 
        </div>
        </div>
        
    </div>
  )
}

export default ProfileCard