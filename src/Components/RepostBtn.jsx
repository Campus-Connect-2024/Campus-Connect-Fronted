import React, {useState} from 'react'

const RepostBtn = ({svg, className}) => {
    const [reposts, setReposts] = useState(0);

    const handleClick = () => {
        setReposts(reposts + 1);
    }

  return ( 
    <div className=' pl-5 py-2 cursor-pointer flex justify-center items-center'>              
        
    </div>
  )
}

export default RepostBtn