import React from 'react'
import FollowBtn from './FollowBtn'
import ProfileImage from '../ProfileImage'
import resultImg from '/src/assets/result.png'
function PeopleCard() {
  return (
    <div className=' bg-[#1b2730] rounded-xl w-full flex justify-between px-4 py-2 mt-1'>
    <div className='flex'>
        <ProfileImage imgUrl={resultImg} className="w-14 h-14" />
        <div className='ml-4 text-start'>

        <p className='text-white font-semibold'>Ravindra Yadav</p>
        <p className='text-gray-300 text-sm italic'>@ravindra01</p>
    </div>
    </div>
    <FollowBtn />
    
</div>
  )
}

export default PeopleCard