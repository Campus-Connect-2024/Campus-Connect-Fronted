import React, { useState } from 'react'

function LikeBtn({className, svg}) {
    const [Likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes(Likes + 1);
    }

  return ( 
    <div className='border-2 border-gray-400 rounded-3xl  pl-5 w-32 py-2 cursor-pointer flex items-center'>              
        <button className='flex gap-3 text-white cursor-pointer items-center' onClick={handleClick}><img src={svg} className={` ${className}`} alt="like" /> Likes </button>
    </div>
  )
}

export default LikeBtn