import { useState } from 'react'
import postImage from './assets/result.png'
import { Navbar, PostCard, ShowPostCard, RightSideCard, LeftSideCard} from './Components/index'

function App() {

  return (
    <div className='w-full'>
      <Navbar />
      <div className='flex'>
        <div className='lg:w-[22vw]'>
        <div className='mx-3 mt-1 ' >
          <LeftSideCard />
        </div>
        <div className='mx-3 my-2'>
          <LeftSideCard />
        </div>
        </div>
        <div className='overflow-auto w-[50vw] flex-1'>
        <div className=' mt-1 '>
          <PostCard />
          <ShowPostCard postImage={postImage}/>
          <ShowPostCard postImage={postImage}/>
          <ShowPostCard postImage={postImage}/>
        </div>  
        </div>
        <div className='w-[28vw]'>       
        <div className='mx-3 mt-1' >
        <RightSideCard/>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default App
