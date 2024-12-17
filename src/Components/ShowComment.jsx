import React, {useState} from "react";
import ProfileImage from "./ProfileImage";
import profilePic from "../assets/cover.jpg";
import PostTime from "../PostTime";

const ShowComment = ({ comment }) => {

  return (
    <div className="w-full flex  my-3" key={comment._id}>
      <div className="text-black bg-gray-200 rounded-2xl px-4 py-2 w-full  md:max-w-[60%] lg:max-w-[50%] md:ml-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
          <ProfileImage imgUrl={comment?.owner.avatar} className="w-8 h-8" />
          <p className="font-semibold ">{comment?.owner.fullName}</p>
          </div>
          <PostTime date={comment.createdAt} />
        </div>
        <div className="">
          <p className="text-start ml-12  text-sm md:text-base">{comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowComment;
