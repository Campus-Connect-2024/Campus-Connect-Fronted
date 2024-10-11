import React, { useState } from "react";
import CurrentUserAvatar from "./CurrentUserAvatar";
import photoSvg from "/src/assets/Gallery.svg";
import videoSvg from "/src/assets/video.svg";
import { apiClient } from "../lib/api-client";
import { CREATE_POST_ROUTE } from "../utils/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostForm = ({ postForm }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [postMessage, setPostMessage] = useState("");
  const [postFile, setPostFile] = useState(null); // Use null for no file

  const postFileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostFile(file);
      console.log(file);
    }
  };

  const postMsgHandler = (e) => {
    setPostMessage(e.target.value);
  };

  const postHandler = async () => {
    const data = new FormData();
    data.append("description", postMessage);
    if (postFile) {
      data.append("MediaFile", postFile);
    }

    try {
      const response = await apiClient.post(CREATE_POST_ROUTE, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      postForm();
      console.log("createPostData", response.data);
    } catch (error) {
      console.error("create_post error", error);
    }
  };

  return (
    <div className="w-full h-full fixed inset-0 z-50 flex justify-center items-center bg-white/75">
      <div className="w-full h-[100vh] md:h-auto py-8  sm:w-11/12 md:w-10/12 lg:w-3/5 xl:w-2/5 bg-white rounded-2xl p-5 shadow-md border-2 border-white shadow-gray-600">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-3">
          <Link to={"/profile"}>
            <div className="flex items-center gap-5">
              <CurrentUserAvatar className="w-12 h-12" />
              <div>
                <p className="text-xl font-bold">{currentUser?.fullName}</p>
                <p className="text-md font-normal italic">@{currentUser?.username}</p>
              </div>
            </div>
          </Link>
          <button onClick={postForm} className="hover:text-xl">
            ❌
          </button>
        </div>

        {/* Post Message Input */}
        <div className="w-full mb-5">
          <textarea
            name="postMessage"
            id="postmsg"
            cols="30"
            rows="5"
            placeholder="Write your message..."
            className="w-full border-none outline-none p-5 rounded-xl text-xl ring-2 focus:ring-blue-500 "
            onChange={postMsgHandler}
          ></textarea>
        </div>

        {/* File Upload Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <label className="cursor-pointer">
              <img src={photoSvg} alt="Upload" />
              <input
                type="file"
                accept=".jpg, .png, .pdf, .gif"
                style={{ display: "none" }}
                onChange={postFileHandler}
              />
            </label>
            <label className="cursor-pointer">
              <img src={videoSvg} alt="Upload" />
              <input
                type="file"
                accept=".mov,.mp4"
                style={{ display: "none" }}
                onChange={postFileHandler}
              />
            </label>
          </div>

          <button
            className="px-4 py-1 text-blue-600 bg-gray-300/75  text-lg rounded-full hover:bg-blue-600 hover:text-white transition"
            onClick={postHandler}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
