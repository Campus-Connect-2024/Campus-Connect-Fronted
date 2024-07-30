import React from 'react'
import { Link } from 'react-router-dom'
import reactImg from "/src/assets/result.png"
import ProfileImage from '../ProfileImage'

function ProfileCard(className) {
  return (
    <div className="bg-[#1b2730] rounded-xl w-full md:w-[14vw] lg:w-full text-white">
        <div className='w-full rounded-t-xl h-28 md:h-24 lg:h-24'>
        <img className=' h-28 md:h-24 lg:h-24 w-full rounded-t-xl' src={reactImg} alt="img" />
        </div>
        <div className='flex justify-center items-center'>
            <ProfileImage className=" border-4 mt-[-38px] w-24" imgUrl={reactImg}/>
        </div>
       
        <div className='pt-4 pb-5 px-8'>
        <div >
            <p className='text-center text-xl font-bold'>Ravindra Yadav </p>
            <p className='text-center font-normal italic text-gray-400 hover:text-white'>@Ravindra01 </p>
        </div>
        <div >
            <p className='text-center font-semibold'>Indian Institute of Information Technology, Bhopal</p>
           
        </div>
        <div className='flex justify-between px-4 py-3'>
            <div>
                <p  className='text-center text-xl font-bold'>985</p>
                <p className='text-center italic font-normal text-gray-400 hover:text-white'>following</p>
            </div>
            <div>
                <p className='text-center text-xl font-bold'>1512</p>
                <p className='text-center italic font-normal text-gray-400 hover:text-white'>follower</p>
            </div>
        </div>
        <hr />
        <div className='pt-2 text-center'> 
            <a className=' italic font-semibold' href='/profile'> My Profile</a> 
        </div>
        </div>
        
    </div>
  )
}

export default ProfileCard