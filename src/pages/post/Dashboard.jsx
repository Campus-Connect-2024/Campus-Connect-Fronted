import React, { useEffect, useState } from "react";
import {
  Navbar,
  PostCard,
  ShowPostCard,
  LeftSideCard,
  RightSideCard,
} from "../../Components";
import { apiClient } from "../../lib/api-client";
import { GET_ALL_POSTS } from "../../utils/constants";
import LoadingPage from "../../Components/Container/LoadingPage";
import { useDispatch } from "react-redux";

import { getUserData } from "../../slice/authThunk";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
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

      if (CurrentUser) {
        console.log("current user", CurrentUser);
      }
    } catch (error) {
      console.log("current_user_error", error);
    }
  };
  getCurrentUser();

  return (
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
          <div className="w-full">
            <PostCard />
            {posts.map((post) => (
              <ShowPostCard key={post._id} post={post} />
            ))}
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
