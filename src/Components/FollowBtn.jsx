import React, { useState } from 'react'


function FollowBtn() {
  const [follow, setFollow] = useState(false);
  console.log(follow)
  return (
    <div className='flex items-center justify-center'> 
        <button className='border-none text-blue-600  text-lg cursor-pointer text-center  hover:text-blue-400 hover:underline' onClick={() => setFollow(!follow)}  >Follow</button>
    </div>
  )
}

export default FollowBtn