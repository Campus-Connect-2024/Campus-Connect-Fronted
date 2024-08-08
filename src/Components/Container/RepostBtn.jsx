import React, {useState} from 'react'

const RepostBtn = ({svg, className}) => {
    const [reposts, setReposts] = useState(0);

    const handleClick = () => {
        setReposts(reposts + 1);
    }

  return ( 
    <div className=' pl-5 py-2 cursor-pointer flex justify-center items-center'>              
        <button className='flex gap-3 text-black cursor-pointer items-center' onClick={handleClick}><img src={svg} className={` ${className}`} alt="like" /> {reposts} </button>
    </div>
  )
}

export default RepostBtn