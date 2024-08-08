import React, {useState} from 'react'
import profileImg from '/src/assets/train.jpg'
import ProfileImage from '../ProfileImage'
import PostBtn from './PostBtn'
import photoSvg from '/src/assets/Gallery.svg'
import videoSvg from '/src/assets/video.svg'
import PostForm from './PostForm'
function PostCard() {
  const [postForm, setPostForm] = useState(false);
  const postFormHandler = () => {
    postForm ? setPostForm(false) : setPostForm(true);
  }
  return (
    <div className=' bg-white flex py-5 px-7 rounded-[1.5rem] w-full h-[9rem] mb-6 justify-center shadow-md border-2 border-white '>
        <div className='w-16 h-14 mr-5'>
            <ProfileImage  imgUrl={profileImg} className='w-14 h-14'/>
        </div>
        <div className='w-full'>
            <button  className='w-full rounded-2xl bg-gray-200 py-3 px-7 mb-5 text-start ' onClick={postFormHandler}>write your message ...😊</button>
            {postForm && <PostForm postForm={postFormHandler}/>}
            <div className='flex gap-2'>
                <PostBtn type="file" svg={photoSvg} label="Photo" accept=".jpg, .png, .pdf, .gif" /> 
                <PostBtn type="file" svg={videoSvg} label="Video" accept=".mov,.mp4"/> 
                {/* <PostBtn type="file" svg={photoSvg} label="Photo" accept=".jpg, .png, .pdf, .gif" /> 
                <PostBtn type="file" svg={videoSvg} label="Video" accept=".mov,.mp4"/>  */}
            </div>
        </div>
    </div>
  )
}

export default PostCard