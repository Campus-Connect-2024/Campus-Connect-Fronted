import React, { useEffect, useState } from "react";
import {
  Navbar,
  PostCard,
  ShowPostCard,
  LeftSideCard,
  RightSideCard,
} from "../../Components";
import { apiClient } from "../../lib/api-client";
import { CURRENT_USER_ROUTES, GET_ALL_POSTS } from "../../utils/constants";
import LoadingPage from "../../Components/Container/LoadingPage";
import { useDispatch } from "react-redux";
import { setCurrentUserInfo } from "../../slice/authSlice";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [currentUser, setCurrentUser] = useState(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      // console.log("getallposts", GET_ALL_POSTS);
      try {
        const allPosts = await apiClient.get(GET_ALL_POSTS, {
          withCredentials: true,
        });
        if (!allPosts) {
          console.log("loading", loading);
          setLoading(true);
          setError(false);
        }
        if (allPosts) {
          setPosts(allPosts.data.data.posts);
          setLoading(false);
          setError(false);
        }
        console.log(allPosts.data.data.posts);

        const getCurrentUser = async () => {
          try {
            const CurrentUser = await apiClient.get(
              CURRENT_USER_ROUTES,
              
              { withCredentials: true }
            );
            if(CurrentUser){
              dispatch(setCurrentUserInfo(CurrentUser.data.data));
              console.log("current user", CurrentUser.data.data);
            }
          } catch (error) {
            console.log(error);
          }
        };
        getCurrentUser();
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    })();
  }, []);

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
