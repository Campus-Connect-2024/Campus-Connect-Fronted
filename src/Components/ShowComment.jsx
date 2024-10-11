import React from "react";
import ProfileImage from "./ProfileImage";
import profilePic from "../assets/cover.jpg";

const ShowComment = ({ comment }) => {
  return (
    <div className="w-full flex  my-3" key={comment._id}>
      <div className="text-black bg-gray-200 rounded-2xl px-4 py-2 w-full  md:max-w-[60%] lg:max-w-[50%] md:ml-4">
        <div className="flex  gap-3">
          <ProfileImage imgUrl={profilePic} className="w-8 h-8" />
          <p className="font-semibold ">Owner Name</p>
        </div>
        <div className="">
          <p className="text-start ml-12  text-sm md:text-base">{comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowComment;
