import React from "react";
import ProfileImage from "../ProfileImage";
import profilePic from "../../assets/cover.jpg";

const ShowComment = ({ comment }) => {
  return (
    <div className="w-full flex justify-center my-3" key={comment._id}>
      <div className="text-black bg-gray-200 rounded-2xl px-4 py-2 w-3/4 ml-4 ">
        <div>
          <div className="flex gap-3">
            <ProfileImage imgUrl={profilePic} className="w-8 h-8" />
            <p>owner Name</p>
          </div>
        </div>
        <div >
          <p className="text-center">{comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowComment;
