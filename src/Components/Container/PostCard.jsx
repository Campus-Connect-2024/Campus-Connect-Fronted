import React, {useState} from 'react'

import ProfileImage from '../ProfileImage'
import PostBtn from './PostBtn'
import photoSvg from '/src/assets/Gallery.svg'
import videoSvg from '/src/assets/video.svg'
import PostForm from './PostForm'
import { useSelector } from 'react-redux'
function PostCard() {
  const [postForm, setPostForm] = useState(false);
  const currentUser = useSelector((state) => state.auth.userData);
  const postFormHandler = () => {
    postForm ? setPostForm(false) : setPostForm(true);
  }
  return (
    <div className=' bg-white flex py-5 px-7 rounded-[1.5rem] w-full h-[9rem] mb-6 justify-center shadow-md border-2 border-white '>
        <div className='w-16 h-14 mr-5'>
            <ProfileImage  imgUrl={currentUser?.avatar} className='w-14 h-14'/>
        </div>
        <div className='w-full'>
            <button  className='w-full rounded-2xl bg-gray-200 py-3 px-7 mb-5 text-start ' onClick={postFormHandler}>write your message ...😊</button>
            
            <div className='flex gap-12 w-full px-4'>
                <button  onClick={postFormHandler} className='flex  gap-3 text-black cursor-pointer hover:font-bold '><img src={photoSvg} />Photo</button> 
                
                <button onClick={postFormHandler} className='flex gap-3 text-black cursor-pointer hover:font-bold '><img src={videoSvg} className='ml-6' />Video</button> 
                
            </div>
            {postForm && <PostForm postForm={postFormHandler}/>}
        </div>
    </div>
  )
}

export default PostCard