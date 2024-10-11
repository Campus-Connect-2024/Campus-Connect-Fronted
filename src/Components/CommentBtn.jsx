import React, {useEffect, useState} from 'react'
import { apiClient } from '../lib/api-client';
import { COMMENT_ROUTE } from '../utils/constants';
const CommentBtn = ({svg, className, post, onClick}) => {
    const [comments, setComments] = useState([]);

    // useEffect(() => {
    //   ;(async () => {
    //     try { 
    //       const getAllComment = await apiClient.get(
    //         `${COMMENT_ROUTE}${postId}`,
    //         { withCredentials: true }
    //       )
    //       console.log("getAllComment", getAllComment);
    //       if(getAllComment){
    //         setComments(getAllComment.data.data);
    //       }
    
    //     } catch (error) {
    //       console.log("getAllComment_error", error);
    //     }
    // })()
    // }, [])
    

  return ( 
    <div className=' pl-5 py-2 cursor-pointer flex justify-center items-center'>              
        <button className='flex gap-3 text-black cursor-pointer items-center' ><img src={svg} className={` ${className}`} alt="like" onClick={onClick} /> {post.commentsCount} </button>
    </div>
  )
}

export default CommentBtn