import React from 'react'
import SearchBox from '../SearchBox'
import CampusSvg from '/src/assets/Campus.svg'

function Header() {
  return (
    <nav className='w-full sticky top-0 flex justify-between px-8 py-5 bg-[#06141d] items-center'>
      <div className='flex'>      
      <img className='w-8' src={CampusSvg}/> 
      <SearchBox placeholder="# explore" className='rounded-xl bg-[#1b2730]  px-4 py-1 ml-6 placeholder:font-bold'/>
      </div>
      <div>
        {/* continue Here  */}
      </div>
    </nav>
  )
}

export default Header