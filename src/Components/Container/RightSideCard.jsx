import React from 'react'
import CommunitiesCard from './CommunitiesCard'
import PeopleCard from './PeopleCard'
function RightSideCard() {
  return (
    <>
    <div className="bg-[#1b2730] rounded-xl w-full md:w-[14vw] lg:w-full text-white px-2.5 pb-2">
        <p className='text-xl font-semibold px-4 pt-4 pb-3'>Suggested Communities</p>
        <CommunitiesCard/>
        <CommunitiesCard/>
        <CommunitiesCard/>
        <CommunitiesCard/>       
    </div>
    <div className="bg-[#1b2730] rounded-xl w-full md:w-[14vw] lg:w-full text-white px-2.5 pb-2 mt-3">
        <p className='text-xl font-semibold px-4 pt-4 pb-3'>Similar Minds</p>
        <PeopleCard/>    
        <PeopleCard/>    
        <PeopleCard/>    
        <PeopleCard/>    
    </div>

    </>
  )
}

export default RightSideCard