import React from "react";
import {
  Navbar,
  LeftSideCard,
  RightSideCard,
} from "../../Components/index.js";
import PostPage from "../post/PostPage.jsx";

const Dashboard = () => {
  
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
            <PostPage/>
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
