import React, { useEffect, useState } from "react";
import {
  Navbar,
  LeftSideCard,
  RightSideCard,
  PostCard,
  LoadingPage,
  ShowPostCard
} from "../../Components/index.js";
import { apiClient } from "../../lib/api-client.js";
import { GET_ALL_POSTS } from "../../utils/constants.js";
import ErrorPage from "../Error/ErrorPage.jsx";
import { getUserData } from "../../Redux/slice/authThunk.js";
import { useDispatch } from "react-redux";
import { getPost } from "../../Redux/slice/postSlice.js";


const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const allPosts = await apiClient.get(GET_ALL_POSTS, {
          withCredentials: true,
        });

        if (allPosts) {
          setLoading(false);
          setPosts(allPosts.data.data.posts);
          dispatch(getPost(allPosts.data));
        }
       
      } catch (err) {
        setError(true);
        setLoading(false);
        console.error("post_error: ", err);
      }
      await dispatch(getUserData());
    })();
    
  }, []);

  if(loading){
    return(
      <LoadingPage/>
    )
  }

  if(error){
    return(
      <ErrorPage/>
    )
  }

  return  (
    <div className="w-full h-screen flex flex-col">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-grow lg:m-4 lg:space-x-4">
        {/* LeftSideCard - Hidden on mobile and visible on larger screens */}
        <div className="hidden lg:block w-[22vw]">
          <div className="mx-3">
            <LeftSideCard />
          </div>
        </div>

        {/* Main Post Content */}
        <div className="flex-1 overflow-y-scroll lg:h-[89vh] no-scrollbar">
         <div className='w-full'>
        <PostCard/>
        {
          posts.map((post) => <ShowPostCard key={post._id} post={post} />)
        }
    </div>
        </div>

        {/* RightSideCard - Hidden on mobile and visible on larger screens */}
        <div className="hidden lg:flex w-[25vw]">
          <div className="mx-3">
            <RightSideCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
