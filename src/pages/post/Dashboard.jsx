import React, { useEffect, useState } from "react";
import {
  Navbar,
  PostCard,
  ShowPostCard,
  LeftSideCard,
  RightSideCard,
} from "../../Components";
import { apiClient } from "../../lib/api-client";
import {  GET_ALL_POSTS } from "../../utils/constants";
import LoadingPage from "../../Components/Container/LoadingPage";
import { useDispatch } from "react-redux";

import { getUserData } from "../../slice/authThunk";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  // const [currentUser, setCurrentUser] = useState(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      // console.log("getallposts", GET_ALL_POSTS);
      try {
        const allPosts = await apiClient.get(GET_ALL_POSTS, {
          withCredentials: true,
        });
       
        if (allPosts) {
          setPosts(allPosts.data.data.posts);
         
        }
        console.log(allPosts.data.data.posts);
      } catch (error) {
       
        console.log("post_error: ", error);
      }
    })();
  }, []);

  const getCurrentUser = async () => {
    try {
      const CurrentUser = await dispatch(getUserData());

      if(CurrentUser){
        
        console.log("current user", CurrentUser);
      }
    } catch (error) {
      console.log("current_user_error",error);
    }
  };
  getCurrentUser();

  return (
    <div className="w-full h-100vh flex flex-col fixed top-0">
      <div className="sticky top-0">
        <Navbar />
      </div>
      <div className="flex mx-5 my-5">
        <div className="lg:w-[22vw]">
          <div className="mx-3 hidden">
            <LeftSideCard />
          </div>
          <div className="mx-3 my-2 none">
            <LeftSideCard />
          </div>
        </div>
        <div className="overflow-y-scroll h-[90vh] flex-1 my-2 mx-4 no-scrollbar">
          <div className="  w-full ">
            <PostCard />
            {posts.map((post) => (
              <ShowPostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
        <div className="w-[25vw] mt-2">
          <div className="mx-3 ">
            <RightSideCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
