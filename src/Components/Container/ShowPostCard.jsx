import React from "react";
import profileImg from "/src/assets/result.png";
import ProfileImage from "../ProfileImage";
import photoSvg from "/src/assets/Gallery.svg";
import videoSvg from "/src/assets/video.svg";
import HeartSvg from '/src/assets/heart.svg'
import CommentSvg from '/src/assets/comment.svg'
import repostSvg from '/src/assets/repost.svg'
import LikeBtn from "./LikeBtn";

import PostBtn from "./PostBtn";
import PostTime from "../../PostTime";

function ShowPostCard({postImage= null,}) {
  const time = new Date("2024-07-26T11:30:00");
  console.log(time);
  return (
    <div className="border-none bg-[#1b2730] flex flex-col py-5 px-8 rounded-2xl w-full h-34 mt-3">
      <div className="w-full mr-7 flex  ">
        <ProfileImage className="w-16 border-2 h-16" imgUrl={profileImg} />
        <div className="flex flex-col">
          <div className="flex">
            <p className="font-semibold text-xl ml-6 mr-4 mt-2 mb-1 text-white">
              Ravindra Yadav
            </p>
            <p className="my-2 text-gray-300">@Ravindra01</p>
          </div>
          <PostTime date={time} />
        </div>
      </div>
      <div className="w-full mt-3 pl-16">
        <div className="mb-5 px-5 text-white">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            quisquam eius maiores necessitatibus provident fugiat in quis rerum
            commodi nesciunt at animi velit mollitia magni aperiam magnam
            aliquam perspiciatis perferendis?
          </p>
        </div>
        {postImage  && (
          <div className="px-4">
            <img className="w-full rounded-2xl" src={postImage} alt="post" />
          </div>
        )}
        <div className="flex gap-6 pl-3 mt-5">
          <LikeBtn 
            svg={HeartSvg}
          />
          <PostBtn
            type="button"
            svg={repostSvg}
            label="Repost"
            
          />
          <PostBtn
            type="button"
            svg={CommentSvg}
            label="Comment"
           
          />
          <PostBtn
            type="button"
            svg={videoSvg}
            label="Video"
            accept=".mov,.mp4"
          />
        </div>
      </div>
    </div>
  );
}

export default ShowPostCard;
