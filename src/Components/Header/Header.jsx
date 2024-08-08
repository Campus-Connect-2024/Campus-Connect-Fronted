import React from 'react'
import SearchBox from '../SearchBox'
import CampusSvg from '/src/assets/Campus.svg'
import Homesvg from '/src/assets/Home.svg'
import msgSvg from '/src/assets/message.svg'
import logoutSvg from '/src/assets/logout.svg'
import groupsvg from '/src/assets/peoplegroup.svg'
import { Link } from 'react-router-dom'
import ProfileImage from '../ProfileImage'
import resultImg from '/src/assets/train.jpg'

function Header() {
  return (
    <nav className='w-full sticky top-0 flex justify-between px-[3.4rem] py-4 bg-white items-center'>
      <div className='flex'>  
        <Link to="/dashboard"><img className='w-10' src={CampusSvg}/></Link>    
      
      <SearchBox placeholder="# explore" className='rounded-xl bg-gray-200  px-4 py-1 ml-6 placeholder:font-semibold text-gray-700'/>
      <div className='flex'>
        <ul className='flex justify-center items-center gap-14 ml-14 font-semibold'>
          <li ><Link to="/dashboard"><img className='hover:bg-blue-600 w-7' src={Homesvg}/> </Link></li>
          <li><Link to="/message"><img className='hover:bg-blue-600 w-7' src={msgSvg}/> </Link></li>
          <li><Link to="/communities"><img  className='hover:fill-blue-600 w-7' src={groupsvg}/> </Link></li>
          <li><Link to="/all-people">All People</Link></li>
        </ul>
      </div>
      </div>
      <div className='flex justify-center items-center gap-5'>
        <Link className='flex gap-3 justify-center items-center' to="/profile">
        <ProfileImage imgUrl={resultImg} className="w-10 h-10"/>
        <span className='font-semibold text-gray-600'>Ravindra</span>
        </Link>
        <div className=''>
        <button><img  className='hover:fill-blue-600 w-5' src={logoutSvg}/></button>
        </div>
        

        
      </div>
    </nav>
  )
}

export default Header