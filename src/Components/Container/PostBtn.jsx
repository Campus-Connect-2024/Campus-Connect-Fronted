import React, { useId } from 'react'


function PostBtn({className, label, svg, type, accept}) {
    const id = useId();
    
  return (
    <div className='border-2 border-gray-400 rounded-3xl py-2 px-6 w-32 cursor-pointer'>       
        <input type={type}  id={id} className={`hidden ${className}`} accept={accept}/>
        <label htmlFor={id} className='flex gap-3 text-white cursor-pointer'><img src={svg} alt="label" /> {label} </label>
    </div>
    
  )
}

export default PostBtn