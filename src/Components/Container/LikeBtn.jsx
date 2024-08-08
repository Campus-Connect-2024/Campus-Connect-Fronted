import React, { useState } from 'react'

function LikeBtn({className, svg}) {
    const [Likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes(Likes + 1);
    }

  return ( 
    <div className=' pl-5 py-2 cursor-pointer flex justify-center items-center'>              
        <button className='flex gap-3 text-black cursor-pointer items-center' onClick={handleClick}><img src={svg} className={` ${className}`} alt="like" /> {Likes} </button>
    </div>
  )
}

export default LikeBtn