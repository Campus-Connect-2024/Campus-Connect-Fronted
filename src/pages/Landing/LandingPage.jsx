import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../Redux/slice/authThunk';
const LandingPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {    
        ;(async () => {
            const res = await dispatch(getUserData());
            if (res.meta.requestStatus === "fulfilled") {
                navigate("/dashboard");
            }else{
                navigate("/login");
            }
        })()
       
    }, []);

  return (
    <div>LandingPage</div>
  )
}

export default LandingPage