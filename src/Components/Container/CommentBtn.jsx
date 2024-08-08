import React, {useState} from 'react'

const CommentBtn = ({svg, className}) => {
    const [comments, setComments] = useState(0);

    const handleClick = () => {
        setComments(comments + 1);
    }

  return ( 
    <div className=' pl-5 py-2 cursor-pointer flex justify-center items-center'>              
        <button className='flex gap-3 text-black cursor-pointer items-center' onClick={handleClick}><img src={svg} className={` ${className}`} alt="like" /> {comments} </button>
    </div>
  )
}

export default CommentBtn