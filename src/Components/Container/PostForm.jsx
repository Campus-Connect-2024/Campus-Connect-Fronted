import React from "react";
import ProfileImage from "../ProfileImage";
import profileImg from "/src/assets/icon.jpeg";
import PostBtn from "./PostBtn";
import photoSvg from "/src/assets/Gallery.svg";
import videoSvg from "/src/assets/video.svg";

const PostForm = ({ postForm }) => {
  return (
    <div className="w-full h-100vh flex flex-col fixed top-0 left-0 right-0 bottom-0 ">
      <div className="w-full h-full bg-white/85 rounded-2xl flex justify-center items-center flex-col px-[20rem]  ">
        <div className="shadow-md border-2 border-white shadow-gray-600 rounded-2xl w-full p-5 bg-white">
          <div className="flex justify-between items-center mb-3 w-full px-5">
            <div className="flex justify-center items-center gap-5">
              <ProfileImage imgUrl={profileImg} className="w-12 h-12" />
              <p className="text-xl font-bold">Ravindra Yadav</p>
            </div>
            <div>
              <button onClick={postForm}>❌</button>
            </div>
          </div>
          <div className="w-full p-5">
            <textarea
              name="postMessage"
              id="postmsg"
              cols="80"
              rows="10"
              placeholder="Write your message....."
              className="w-full border-2 border-black p-5 rounded-xl text-xl"
            ></textarea>
          </div>
          <div className="flex justify-between items-center px-5">
          <div className="flex items-center gap-5">
              <PostBtn className="ml-5  " svg={photoSvg} type="file" accept=".jpg, .png, .pdf, .gif"/>
              <PostBtn className="ml-5 " svg={videoSvg} type="file" accept=".mov,.mp4" />
            </div>
            <div>
              <button className=" px-6 py-2 text-blue-600 text-xl rounded-full hover:bg-blue-600 hover:text-white">
                Post
              </button>
            </div>
            
          </div>
          {/* <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          mollitia ex eligendi nobis, nulla ad neque rerum omnis corporis aut!
          Debitis reprehenderit tempora provident numquam id voluptate aperiam
          ab consectetur. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fuga distinctio perferendis sint repellendus quis quia
          aspernatur ex nostrum, est, atque quam. Aut quo enim nulla minus sint
          quas fugit inventore?
        </p> */}
          {/* <button
            onClick={postForm}
            className="px-3 py-2 bg-orange-400 rounded-2xl"
          >
            Close
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default PostForm;
