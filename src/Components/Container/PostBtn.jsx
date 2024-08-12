import React, { useId } from 'react'


function PostBtn({className, label, svg, type, accept}) {
    const id = useId();
    
  return (
    <div className=' py-2 px-2 cursor-pointer w-full'>       
        <input type={type}  id={id} className={`hidden ${className}`} accept={accept}/>
        <label htmlFor={id} className='flex gap-3 text-black cursor-pointer hover:font-bold '><img src={svg} alt="label" /> {label} </label>
    </div>
    
  )
}

export default PostBtn