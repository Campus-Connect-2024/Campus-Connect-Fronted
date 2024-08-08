import React from "react";
import profileImg from "/src/assets/train.jpg";
import ProfileImage from "../ProfileImage";
import HeartSvg from "/src/assets/heart.svg";
import CommentSvg from "/src/assets/comment.svg";
import repostSvg from "/src/assets/repost.svg";
import sendSvg from "/src/assets/send.svg";
import LikeBtn from "./LikeBtn";

import PostBtn from "./PostBtn";
import PostTime from "../../PostTime";
import SearchBox from "../SearchBox";
import CommentBtn from "./CommentBtn";
import RepostBtn from "./RepostBtn";

function ShowPostCard({ post = undefined }) {
  const time = new Date(post?.createdAt);
  console.log(time);
  return (
    <div className="bg-white flex flex-col py-5 px-8 rounded-[1.5rem] w-full h-34 my-6 shadow-md border-2 border-white">
      <div className="w-full mr-7 flex  ">
        <ProfileImage
          className="w-16 border-2 h-16"
          imgUrl={post?.owner.avatar}
        />
        <div className="flex flex-col">
          <div className="flex justify-center items-center">
            <p className="font-semibold text-xl ml-6 mr-4 mt-2 mb-1 text-black">
              {post?.owner.fullName}
            </p>
            {/* <p className="my-2 text-gray-700">@{post?.owner.username}</p> */}
          </div>
          <PostTime date={time} />
        </div>
      </div>
      <div className="w-full mt-3 pl-16">
        <div className="mb-5 px-5 text-black">
          <p className="text-justify">{post?.description}</p>
        </div>
        <div className="px-5">
          {post?.MediaFile.url && (
            <div className="w-full ">
              <img
                className="w-full rounded-2xl overflow-hidden"
                src={post?.MediaFile.url}
                alt="post"
              />
            </div>
          )}
        </div>

        <div className="flex gap-10 pl-3 mt-5">
          <LikeBtn svg={HeartSvg} />
          <CommentBtn svg={CommentSvg} />
          <RepostBtn svg={repostSvg} />
          
        </div>
        <div className="flex gap-5 mt-5">
          <ProfileImage imgUrl={profileImg} className="w-12 h-12 ml-5"/>
          <SearchBox placeholder="write your commet..." className="px-5 py-3 bg-gray-300 w-full rounded-2xl"/>
          <button className=" bg-blue-500 px-3 py-2 rounded-full w-14 h-11"><img src={sendSvg} className="" alt="post"/></button>
        </div>
      </div>
    </div>
  );
}

export default ShowPostCard;
