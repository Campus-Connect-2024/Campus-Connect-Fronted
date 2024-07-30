import React from 'react'
import profileImg from '/src/assets/result.png'
import ProfileImage from '../ProfileImage'
import SearchBox from '../SearchBox'
import PostBtn from './PostBtn'
import photoSvg from '/src/assets/Gallery.svg'
import videoSvg from '/src/assets/video.svg'
function PostCard() {
  return (
    <div className=' bg-[#1b2730] flex py-5 px-8 rounded-2xl w-full h-34'>
        <div className='w-full h-14'>
            <ProfileImage className="w-16 border-2 h-14" imgUrl={profileImg}/>
        </div>
        <div className='w-full'>
            <SearchBox placeholder="write your message ..." className='w-full  rounded-md bg-[#28343e] p-3 mb-5'/>
            <div className='flex gap-6 ml-3'>
                <PostBtn type="file" svg={photoSvg} label="Photo" accept=".jpg, .png, .pdf, .gif" /> 
                <PostBtn type="file" svg={videoSvg} label="Video" accept=".mov,.mp4"/> 
                <PostBtn type="file" svg={photoSvg} label="Photo" accept=".jpg, .png, .pdf, .gif" /> 
                <PostBtn type="file" svg={videoSvg} label="Video" accept=".mov,.mp4"/> 
            </div>
        </div>
    </div>
  )
}

export default PostCard