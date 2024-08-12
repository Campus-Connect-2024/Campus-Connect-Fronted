import React, { useState } from 'react'
import { LIKE_ROUTE } from '../../utils/constants';
import { apiClient } from '../../lib/api-client';

function LikeBtn({className, svg, post}) {
    const [Likes, setLikes] = useState([]);

   
      const likes = async () => {
        try { 
          const getAllLikes = await apiClient.post(
            `${LIKE_ROUTE}${postId}`,{},
            { withCredentials: true }
          )
          console.log("get all likes", getAllLikes.data.data);
          // if(getAllLikes){
          //   setLikes.push(getAllLikes.data.data);
          // }
    
        } catch (error) {
          console.log("getAllLikes", error);
        }
    }

  return ( 
    <div className=' pl-5 py-2 cursor-pointer flex justify-center items-center'>              
        <button className='flex gap-3 text-black cursor-pointer items-center' ><img src={svg} className={` ${className}`} alt="like" /> {post.likesCount} </button>
    </div>
  )
}

export default LikeBtn